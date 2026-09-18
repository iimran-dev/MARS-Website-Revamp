'use client'

import { useRef } from "react";
import { motion, useTransform, useInView, type MotionValue } from "framer-motion";
import { MagneticButton, Crosshair } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { IMAGES } from "./images";

export function FinalCTA() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("reveal");
  const yBg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scaleBg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const overlayOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.7]);
  const revealRef = useRef<HTMLDivElement>(null);
  const inView = useInView(revealRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="cta" ref={ref} className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-mars-navy-night">
      {/* Background image */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.sunrise})` }} />
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-mars-navy-night/80 via-mars-navy-night/55 to-mars-navy-night/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-mars-navy-night/70 via-transparent to-mars-navy-night/70" />
      </motion.div>

      {/* Technical overlay lines */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.line x1="0" y1="50" x2="100" y2="50" stroke="rgba(63,208,255,0.12)" strokeWidth="0.1" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2 }} />
          <motion.line x1="50" y1="0" x2="50" y2="100" stroke="rgba(63,208,255,0.08)" strokeWidth="0.1" strokeDasharray="2 2" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2 }} />
        </svg>
      </div>

      {/* Corner coordinates */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute left-6 top-6 text-white/30">
          <Crosshair />
          <span className="block mt-1 font-mono-tech text-[0.5rem] tracking-[0.2em]">FACILITY 01</span>
        </div>
        <div className="absolute right-6 top-6 text-white/30 text-right">
          <Crosshair className="ml-auto" />
          <span className="block mt-1 font-mono-tech text-[0.5rem] tracking-[0.2em]">SUNRISE 06:12</span>
        </div>
        <div className="absolute left-6 bottom-6 text-white/30">
          <span className="block font-mono-tech text-[0.5rem] tracking-[0.2em]">READY · LAUNCH SEQUENCE</span>
        </div>
        <div className="absolute right-6 bottom-6 text-white/30 text-right">
          <span className="block font-mono-tech text-[0.5rem] tracking-[0.2em]">STATUS · GO</span>
        </div>
      </div>

      {/* Content */}
      <div ref={revealRef} className="container-mars relative z-30 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 font-mono-tech text-[0.62rem] uppercase tracking-[0.3em] text-mars-red"
        >
          <span className="h-px w-8 bg-mars-red" />
          Begin the transformation
          <span className="h-px w-8 bg-mars-red" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[clamp(2.2rem,7vw,6.5rem)] font-600 uppercase leading-[0.95] tracking-[-0.03em] text-white"
        >
          Ready to build a
          <span className="block text-mars-red">world-class organization?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/65 md:text-lg"
        >
          Transform compliance into competitive advantage. The conversation
          that follows is the first step of the work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <MagneticButton href="#footer" variant="primary" className="px-8 py-4 text-sm">
            Book Consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#footer" variant="outline" className="px-8 py-4 text-sm">
            Talk To Our Expert
          </MagneticButton>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M13.6 2.3A7.9 7.9 0 0 0 .1 11.3L0 16l4.8-1.3a7.9 7.9 0 0 0 3.8 1h.01a7.9 7.9 0 0 0 5.6-13.4zM8 14.4h-.01a6.6 6.6 0 0 1-3.4-.94l-.24-.14-2.85.75.76-2.78-.16-.27A6.6 6.6 0 1 1 8 14.4zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.06-.32-.1-.45.1-.13.2-.5.65-.62.78-.11.13-.23.14-.43.04-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.11-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34-.11 0-.25-.01-.38-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66s.72 1.92.82 2.05c.1.13 1.4 2.14 3.4 3 .47.2.85.33 1.14.42.48.15.92.13 1.26.08.38-.06 1.18-.48 1.35-.95.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
