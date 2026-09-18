'use client'

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal, RevealText } from "./primitives";

const PATHWAY = ["Start", "Learn", "Practice", "Certify", "Apply", "Advance"];

const PROGRAMS = [
  { name: "Lead Auditor", cert: "ISO 19011", desc: "Audit principles, planning, execution, and reporting aligned to international management system standards." },
  { name: "Lean Six Sigma", cert: "Yellow → Black Belt", desc: "DMAIC, statistical tools, and leadership of improvement projects with measurable financial impact." },
  { name: "Operational Excellence", cert: "OpEx Practitioner", desc: "Value-stream mapping, OEE, and continuous-improvement leadership for plant and enterprise scale." },
  { name: "Quality Systems", cert: "QMS Professional", desc: "End-to-end QMS architecture, documentation control, and management review ownership." },
  { name: "Industry-Specific", cert: "Sector Programs", desc: "AS9100, IATF 16949, and ISO 13485 curricula tailored to regulated industry contexts." },
];

export function TrainingExcellence() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="training" className="relative overflow-hidden bg-mars-navy-night py-24 md:py-36">
      <div className="absolute inset-0 bg-blueprint-grid opacity-30" aria-hidden />

      <div ref={ref} className="container-mars relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Training Excellence</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"Train.\nUpskill.\nGrow."}
              className="mt-6 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-600 uppercase leading-[0.92] tracking-[-0.03em] text-white"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
                Training for a better tomorrow. Capability that stays in your
                organization long after the certificate is framed.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.3}>
              <p className="font-mono-tech text-[0.58rem] uppercase tracking-[0.26em] text-mars-cyan/70">
                / 5000+ professionals trained
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Every program ends in a demonstrable, auditable capability —
                not a certificate of attendance.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Learning pathway — curved arc */}
        <div className="relative mt-20">
          <div className="relative h-32 w-full overflow-hidden md:h-40">
            <svg viewBox="0 0 100 30" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              {/* Curved arc */}
              <motion.path
                d="M5,28 Q50,2 95,28"
                fill="none"
                stroke="rgba(63,208,255,0.25)"
                strokeWidth="0.3"
                strokeDasharray="1 1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            {/* Pathway nodes positioned along arc */}
            <div className="absolute inset-0 flex items-end justify-between px-4">
              {PATHWAY.map((p, i) => {
                const t = i / (PATHWAY.length - 1);
                // Parabolic y (down at edges, up at middle)
                const yOffset = Math.sin(t * Math.PI) * 60;
                return (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex flex-col items-center"
                    style={{ marginBottom: `${yOffset}px` }}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-mars-cyan/40 bg-mars-navy-deep/80 backdrop-blur-md md:h-14 md:w-14">
                      <span className="font-mono-tech text-[0.6rem] uppercase text-mars-cyan">
                        0{i + 1}
                      </span>
                    </div>
                    <span className="mt-2 font-display text-[0.7rem] font-600 uppercase tracking-tight text-white/85 md:text-xs">
                      {p}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Programs — interactive list */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.26em] text-white/40">
                / Pathways
              </span>
            </Reveal>
            <ul className="mt-6 divide-y divide-white/8 border-y border-white/8">
              {PROGRAMS.map((p, i) => (
                <li key={p.name}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center justify-between py-5 text-left transition-colors duration-300"
                  >
                    <span
                      className={`font-display text-xl font-600 uppercase tracking-tight transition-colors duration-300 md:text-2xl ${
                        active === i ? "text-mars-red" : "text-white/55 hover:text-white"
                      }`}
                    >
                      {p.name}
                    </span>
                    <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/40">
                      {p.cert}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Active program detail */}
          <div className="lg:col-span-7">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-mars-navy-deep/40 p-8 md:p-10"
            >
              <div className="absolute right-6 top-6 font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/30">
                Program 0{active + 1}
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-mars-red/40 bg-mars-red/10 px-3 py-1 font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-mars-red">
                {PROGRAMS[active].cert}
              </span>
              <h3 className="mt-6 font-display text-3xl font-600 uppercase tracking-tight text-white md:text-4xl">
                {PROGRAMS[active].name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                {PROGRAMS[active].desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Blended delivery", "Case-based", "Auditor-led", "Certification-ready"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
