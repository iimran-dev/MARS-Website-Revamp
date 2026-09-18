'use client'

import { useEffect, useRef, type RefObject } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Hydration-safe scroll-progress hook.
 *
 * Replaces framer-motion's `useScroll({ target })` which throws
 * "Target ref is defined but not hydrated" on client hydration in
 * React 19 / Next 16. This hook uses a plain scroll listener +
 * getBoundingClientRect, so it only runs after mount — no SSR/
 * hydration timing issues.
 *
 * Returns a ref to attach to the target element + a MotionValue
 * 0..1 representing scroll progress through the element.
 *
 * Modes mirror the framer offset strings we used:
 *  - "hero"   → ["start start", "end start"]   (p=0 at top-at-top, p=1 at bottom-at-top)
 *  - "pass"   → ["start end",   "end start"]   (p=0 when entering from bottom, p=1 when leaving top)
 *  - "inview" → ["start 0.8",   "end 0.2"]     (p=0 when top at 80% vh, p=1 when bottom at 20% vh)
 *  - "pin"    → ["start start", "end end"]     (p=0 at top-at-top, p=1 at bottom-at-viewport-bottom)
 *  - "reveal" → ["start end",   "end end"]     (p=0 when entering from bottom, p=1 when bottom at viewport bottom)
 */
export type ScrollMode = "hero" | "pass" | "inview" | "pin" | "reveal";

export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  mode: ScrollMode = "pass"
): readonly [RefObject<T>, MotionValue<number>] {
  const ref = useRef<T>(null) as RefObject<T>;
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el2 = ref.current;
        if (!el2) return;
        const rect = el2.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const absTop = rect.top + window.scrollY;
        let start: number;
        let end: number;
        if (mode === "hero") {
          start = absTop;
          end = absTop + rect.height;
        } else if (mode === "pass") {
          start = absTop - vh;
          end = absTop + rect.height;
        } else if (mode === "inview") {
          start = absTop - 0.8 * vh;
          end = absTop + rect.height - 0.2 * vh;
        } else if (mode === "pin") {
          start = absTop;
          end = absTop + rect.height - vh;
        } else {
          // reveal
          start = absTop - vh;
          end = absTop + rect.height - vh;
        }
        const span = end - start || 1;
        const p = Math.max(0, Math.min(1, (window.scrollY - start) / span));
        progress.set(p);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Recompute after fonts/layout settle
    const t = setTimeout(update, 400);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [mode, progress]);

  return [ref, progress] as const;
}
