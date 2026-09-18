'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal, RevealText, Marquee } from "./primitives";

/* Factual industry segments where Mars Sigma operates, plus the
   international standards bodies whose frameworks we implement.
   No fabricated client relationships are presented. */
const SEGMENTS = [
  "Aerospace",
  "Automotive",
  "Defense",
  "Medical Devices",
  "Heavy Engineering",
  "Electronics",
  "Energy",
  "Industrial Automation",
];

const STANDARDS_BODIES = [
  "ISO",
  "IAQG · AS9100",
  "IATF · 16949",
  "IEC",
  "AIAG",
  "ASQ",
  "CQI",
  "SAE",
];

export function TrustedLeaders() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-mars-navy-night py-24 md:py-32">
      <div className="container-mars">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel>Trusted by Industry Leaders</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"Where standards meet\nthe factory floor."}
              className="mt-6 font-display text-[clamp(1.8rem,4vw,3.6rem)] font-600 uppercase leading-[1.02] tracking-[-0.02em] text-white"
            />
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-white/55">
                We work across the regulated industries where compliance is the
                entry ticket and operational excellence is the differentiator.
                Client engagements are governed under NDA — the work, not the
                logo wall, is the proof.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Industry segment marquee */}
      <div className="mt-16 border-y border-white/8 py-8">
        <Marquee speed={45}>
          {SEGMENTS.map((s) => (
            <div
              key={s}
              className="flex items-center gap-12 px-12"
            >
              <span className="font-display text-2xl font-600 uppercase tracking-tight text-white/35 transition-colors duration-300 hover:text-white md:text-3xl">
                {s}
              </span>
              <span className="text-mars-red/40">/</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Standards bodies row */}
      <div ref={ref} className="container-mars mt-16">
        <Reveal>
          <p className="text-center font-mono-tech text-[0.58rem] uppercase tracking-[0.3em] text-white/35">
            / Frameworks implemented
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {STANDARDS_BODIES.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="font-mono-tech text-sm uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 hover:text-white"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
