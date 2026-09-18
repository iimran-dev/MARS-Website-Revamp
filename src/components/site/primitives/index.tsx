'use client'

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============================================================
   SECTION LABEL — eyebrow with red accent line
   ============================================================ */
export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        light ? "text-mars-navy/70" : "text-white/55",
        className
      )}
    >
      <span className="inline-block h-[1px] w-8 bg-mars-red" aria-hidden />
      {children}
    </span>
  );
}

/* ============================================================
   REVEAL — generic scroll reveal wrapper
   Uses explicit useInView + animate (reliable in framer-motion v12 + React 19)
   ============================================================ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });
  const MotionTag = (motion as Record<string, any>)[
    typeof as === "string" ? as : "div"
  ] as React.ComponentType<any>;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ============================================================
   REVEAL TEXT — line-by-line mask reveal for headings
   ============================================================ */
export function RevealText({
  text,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  as = "h2",
}: {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
}) {
  const lines = text.split("\n");
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  const MotionTag = (motion as Record<string, any>)[
    typeof as === "string" ? as : "h2"
  ] as React.ComponentType<any>;

  return (
    <MotionTag ref={ref} className={className} aria-label={text}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-mask">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ============================================================
   COUNT UP — animated number on viewport enter
   ============================================================ */
export function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      // ease-out-expo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(end * eased);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ============================================================
   MAGNETIC BUTTON — pointer-following magnetic hover
   ============================================================ */
export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      x.set(mx * strength);
      y.set(my * strength);
    };
    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, x, y]);

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";

  const variants = {
    primary: "bg-mars-red text-white hover:bg-mars-red-bright",
    ghost: "text-white/80 hover:text-white",
    outline:
      "text-white border border-white/20 hover:border-white/60 hover:bg-white/5 backdrop-blur-sm",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}

/* ============================================================
   MAGNETIC ARROW — small magnetic icon link
   ============================================================ */
export function MagneticArrow({
  children,
  href = "#",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <MagneticButton href={href} variant="ghost" strength={0.25} className={cn("px-0 py-0", className)}>
      <span className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em]">
        {children}
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-white/60 group-hover:bg-white/5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </MagneticButton>
  );
}

/* ============================================================
   CURVED DIVIDER — SVG curved section transition
   ============================================================ */
export function CurvedDivider({
  className,
  fill = "#07111F",
  flip = false,
  height = 80,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none relative w-full overflow-hidden", className)}
      style={{ height }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,0 L1440,0 L1440,40 C1080,80 960,20 720,40 C480,60 360,20 0,40 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ============================================================
   MARQUEE — horizontal scrolling row
   ============================================================ */
export function Marquee({
  children,
  reverse = false,
  className,
  speed = 40,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max items-center"
        style={{
          animation: `${reverse ? "marquee-x-rev" : "marquee-x"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CROSSHAIR — technical corner marker
   ============================================================ */
export function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1" />
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* ============================================================
   STATUS DOT — blinking indicator
   ============================================================ */
export function StatusDot({ className, label = "Live" }: { className?: string; label?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs font-mono-tech tracking-widest", className)}>
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mars-red opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-mars-red" />
      </span>
      {label}
    </span>
  );
}

/* ============================================================
   DRAW LINE — SVG path that draws on scroll using framer
   ============================================================ */
export function DrawPath({
  d,
  className,
  duration = 2,
  delay = 0,
  strokeWidth = 1,
  stroke = "currentColor",
}: {
  d: string;
  className?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  stroke?: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(pathRef, { once: true, margin: "-10% 0px" });
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <motion.path
      ref={pathRef}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={className}
      initial={{ pathLength: 0 }}
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        strokeDasharray: length,
        strokeDashoffset: length,
      }}
    />
  );
}
