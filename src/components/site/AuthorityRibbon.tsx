'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, Reveal } from "./primitives";

const METRICS = [
  { end: 30, suffix: "+", label: "Years of Experience" },
  { end: 3000, suffix: "+", label: "Audits Conducted" },
  { end: 5000, suffix: "+", label: "Professionals Trained" },
  { end: 10000, suffix: "+", label: "Training Hours" },
  { end: 100, suffix: "+", label: "Organizations Transformed" },
];

export function AuthorityRibbon() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className="relative z-20 bg-mars-navy-night">
      <div className="border-y border-white/8 bg-mars-navy-deep/60">
        <div className="container-mars py-12 md:py-16">
          <Reveal>
            <p className="mb-10 font-mono-tech text-[0.6rem] uppercase tracking-[0.3em] text-white/40">
              / A track record measured in decades
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/8">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:px-6 first:lg:pl-0"
              >
                <div className="font-display text-4xl font-600 leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                  <CountUp end={m.end} suffix={m.suffix} duration={2.2} />
                </div>
                <div className="mt-3 max-w-[12rem] text-xs leading-snug uppercase tracking-[0.14em] text-white/45 md:text-sm">
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
