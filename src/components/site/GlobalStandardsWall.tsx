'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal, Marquee } from "./primitives";

const STANDARDS = [
  "AS9100",
  "ISO 9001",
  "ISO 27001",
  "ISO 14001",
  "ISO 45001",
  "IATF 16949",
  "Lean Six Sigma",
  "ISO 13485",
  "ISO 50001",
];

export function GlobalStandardsWall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <section className="relative overflow-hidden bg-mars-navy-night py-24 md:py-36">
      <div className="absolute inset-0 bg-spotlight" aria-hidden />

      <div className="container-mars relative">
        <Reveal>
          <SectionLabel>Global Standards</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-9" delay={0.1}>
            <h2 className="font-display text-[clamp(1.8rem,4.5vw,4.5rem)] font-600 uppercase leading-[0.98] tracking-[-0.03em] text-white">
              Global standards.
              <span className="block text-white/45">Practical solutions.</span>
              <span className="block text-mars-red">Measurable results.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.2}>
            <p className="text-sm leading-relaxed text-white/55">
              The frameworks are universal. The implementation is the work. We
              make standards operate where they actually have to perform.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Massive marquee wall */}
      <div className="mt-16 space-y-2 md:mt-24">
        <Marquee speed={38}>
          {STANDARDS.map((s) => (
            <div key={s} className="flex items-center gap-10 px-10">
              <span className="font-display text-[clamp(3rem,8vw,8rem)] font-600 uppercase leading-none tracking-[-0.04em] text-white/90 transition-colors duration-300 hover:text-mars-red">
                {s}
              </span>
              <span className="font-mono-tech text-[clamp(1rem,2vw,2rem)] text-mars-cyan/40">
                /
              </span>
            </div>
          ))}
        </Marquee>
        <Marquee reverse speed={50}>
          {STANDARDS.slice().reverse().map((s) => (
            <div key={s} className="flex items-center gap-10 px-10">
              <span className="font-display text-[clamp(2.5rem,6vw,6rem)] font-500 uppercase leading-none tracking-[-0.03em] text-white/25 transition-colors duration-300 hover:text-white/70">
                {s}
              </span>
              <span className="font-mono-tech text-mars-red/40">
                ·
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Caption strip */}
      <div ref={ref} className="container-mars relative mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6 font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-white/35"
        >
          <span>/ International frameworks · localized execution</span>
          <span>India · Bahrain · Global delivery</span>
        </motion.div>
      </div>
    </section>
  );
}
