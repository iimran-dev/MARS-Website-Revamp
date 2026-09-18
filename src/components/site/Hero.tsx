'use client'

import { useEffect, useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { SectionLabel, MagneticButton, MagneticArrow, StatusDot, Crosshair } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { IMAGES } from "./images";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export function Hero() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("hero");

  const yImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scaleImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // Particle field — generated only on client (Math.random would cause
  // hydration mismatch if computed during SSR). One-time init on mount.
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      }))
    );
  }, []);

  // Parallax for blueprint overlays
  const yGrid: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-mars-navy-night grain-overlay"
    >
      {/* Background image layer */}
      <motion.div
        style={{ y: yImg, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* Atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-mars-navy-night via-mars-navy-night/85 to-mars-navy-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-mars-navy-night via-transparent to-mars-navy-night/40" />
        <div className="absolute inset-0 bg-spotlight" />
      </motion.div>

      {/* Blueprint grid overlay */}
      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-0 z-10 bg-blueprint-grid-fine opacity-60"
        aria-hidden
      />

      {/* Particle field */}
      <div className="absolute inset-0 z-10" aria-hidden>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-mars-cyan/60"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Technical coordinate markers */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute left-6 top-24 text-white/25">
          <Crosshair />
          <span className="block mt-1 font-mono-tech text-[0.55rem] tracking-[0.18em]">LAT 21.0°N</span>
        </div>
        <div className="absolute right-8 top-32 text-white/25 text-right">
          <Crosshair className="ml-auto" />
          <span className="block mt-1 font-mono-tech text-[0.55rem] tracking-[0.18em]">LON 50.6°E</span>
        </div>
        <div className="absolute left-6 bottom-28 text-white/25">
          <Crosshair />
          <span className="block mt-1 font-mono-tech text-[0.55rem] tracking-[0.18em]">QMS / AS9100D</span>
        </div>
        <div className="absolute right-8 bottom-28 text-white/25 text-right">
          <Crosshair className="ml-auto" />
          <span className="block mt-1 font-mono-tech text-[0.55rem] tracking-[0.18em]">REV 5 / 2026</span>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container-mars relative z-30 flex min-h-[100svh] flex-col justify-center pt-28 pb-20"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>People · Processes · Performance</SectionLabel>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-8 font-display text-[clamp(2.7rem,8.5vw,7.5rem)] font-600 uppercase leading-[0.92] tracking-[-0.03em] text-white">
            {["Building", "High-Performance", "Organizations"].map((line, i) => (
              <span key={line} className="reveal-mask">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.55 + i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 1 ? (
                    <span className="relative inline-block">
                      <span className="text-mars-red">High-Performance</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 h-px bg-mars-red/60"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            Quality Systems. Global Certifications. Operational Excellence.
            <span className="block text-white/45">A stronger tomorrow, engineered today.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#cta" variant="primary">
              Book a Strategy Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
            <MagneticArrow href="#constellation">Explore Our Expertise</MagneticArrow>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute inset-x-0 bottom-0 z-30 border-t border-white/8 bg-mars-navy-night/40 backdrop-blur-sm"
      >
        <div className="container-mars flex h-12 items-center justify-between text-white/55">
          <StatusDot label="System Online" className="text-mars-cyan/80" />
          <div className="hidden md:flex items-center gap-6 font-mono-tech text-[0.58rem] uppercase tracking-[0.22em]">
            <span>ISO 9001</span>
            <span className="text-white/20">/</span>
            <span>AS9100D</span>
            <span className="text-white/20">/</span>
            <span>IATF 16949</span>
            <span className="text-white/20">/</span>
            <span>ISO 27001</span>
          </div>
          <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.22em]">
            Scroll ↓
          </span>
        </div>
      </motion.div>
    </section>
  );
}
