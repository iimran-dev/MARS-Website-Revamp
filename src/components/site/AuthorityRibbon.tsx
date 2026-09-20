'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, Reveal } from "./primitives";

const METRICS = [
  { end: 30, suffix: "+", label: "Years of Experience" },
  { end: 3000, suffix: "+", label: "Audits Conducted" },
  { end: 5000, suffix: "+", label: "Professionals Trained" },
  { end: 10000, suffix: "+", label: "Training Hours" }
];

export function AuthorityRibbon() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-mars-navy-night grain-overlay text-white"
      style={{ backgroundColor: "#07111F" }}
    >
      <div className="border-y border-white/10 bg-mars-navy-night/90 backdrop-blur-md">
        <div className="container-mars py-12 md:py-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-6 bg-mars-red" />
              <p className="font-mono-tech text-[0.65rem] uppercase tracking-[0.28em] text-mars-cyan/90">
                / A track record measured in decades
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="font-display text-4xl font-600 leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                  <CountUp end={m.end} suffix={m.suffix} duration={2} />
                </div>
                <div className="mt-3 max-w-[14rem] text-xs font-500 leading-snug uppercase tracking-[0.14em] text-white/70 md:text-sm">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
