'use client'

import { useRef } from "react";
import { motion, useTransform, useInView, type MotionValue } from "framer-motion";
import { SectionLabel, Reveal, RevealText } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";

const STEPS = [
  { n: "01", code: "Assess", x: 8 },
  { n: "02", code: "Design", x: 22 },
  { n: "03", code: "Implement", x: 36 },
  { n: "04", code: "Train", x: 50 },
  { n: "05", code: "Audit", x: 64 },
  { n: "06", code: "Certify", x: 78 },
  { n: "07", code: "Optimize", x: 92 },
];

export function ProcessBlueprint() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("inview");
  const pathDraw: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const revealRef = useRef<HTMLDivElement>(null);
  const inView = useInView(revealRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-mars-navy-night py-24 md:py-36">
      <div className="absolute inset-0 bg-blueprint-grid opacity-30" aria-hidden />

      <div ref={revealRef} className="container-mars relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Excellence Transformation Engine&trade;</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"A structured path\nfrom where you are\nto global recognition."}
              className="mt-6 font-display text-[clamp(1.7rem,3.6vw,3rem)] font-600 uppercase leading-[1.02] tracking-[-0.02em] text-white"
              lineClassName=""
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-white/55 md:text-base">
                Seven disciplined stages that convert raw operational reality
                into a certified, performance-grade organization. The drawing
                below activates as you read it.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Blueprint drawing */}
        <div className="relative mt-20 h-[26rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-mars-navy-deep/40 p-6 md:mt-24 md:h-[28rem]">
          {/* Corner technical markers */}
          <div className="absolute left-3 top-3 font-mono-tech text-[0.5rem] uppercase tracking-[0.2em] text-white/35">
            DWG-MARS-001
          </div>
          <div className="absolute right-3 top-3 font-mono-tech text-[0.5rem] uppercase tracking-[0.2em] text-white/35">
            SCALE 1:1
          </div>
          <div className="absolute left-3 bottom-3 font-mono-tech text-[0.5rem] uppercase tracking-[0.2em] text-white/35">
            SHEET 01 OF 01
          </div>
          <div className="absolute right-3 bottom-3 font-mono-tech text-[0.5rem] uppercase tracking-[0.2em] text-white/35">
            REV 07
          </div>

          {/* SVG blueprint */}
          <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {/* Grid */}
            <defs>
              <pattern id="pg" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M5 0 L0 0 0 5" fill="none" stroke="rgba(63,208,255,0.06)" strokeWidth="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="50" fill="url(#pg)" />

            {/* Horizontal baseline */}
            <motion.line
              x1="4"
              y1="25"
              x2="96"
              y2="25"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.15"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5 }}
            />

            {/* Zigzag process path that draws progressively */}
            <motion.path
              d="M8,25 L14,25 L14,12 L22,12 L22,25 L28,25 L28,38 L36,38 L36,25 L42,25 L42,12 L50,12 L50,25 L56,25 L56,38 L64,38 L64,25 L70,25 L70,12 L78,12 L78,25 L84,25 L84,38 L92,38"
              fill="none"
              stroke="#E11D2A"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: pathDraw }}
            />

            {/* Nodes */}
            {STEPS.map((s) => (
              <g key={s.n}>
                {/* Vertical connector */}
                <motion.line
                  x1={s.x}
                  y1="25"
                  x2={s.x}
                  y2={s.x % 2 === 0 ? "12" : "38"}
                  stroke="rgba(63,208,255,0.4)"
                  strokeWidth="0.15"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                {/* Node circle */}
                <motion.circle
                  cx={s.x}
                  cy={s.x % 2 === 0 ? "12" : "38"}
                  r="1.2"
                  fill="#3FD0FF"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                />
                {/* Step number label */}
                <text
                  x={s.x}
                  y={s.x % 2 === 0 ? "8" : "46"}
                  fill="rgba(255,255,255,0.55)"
                  fontSize="2"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {s.n}
                </text>
                <text
                  x={s.x}
                  y={s.x % 2 === 0 ? "4.5" : "49.5"}
                  fill="rgba(255,255,255,0.75)"
                  fontSize="1.8"
                  fontFamily="monospace"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {s.code.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Annotations row */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/8 pt-3"
            >
              <div className="font-mono-tech text-[0.55rem] uppercase tracking-[0.18em] text-mars-red">
                {s.n}
              </div>
              <div className="mt-1 font-display text-sm font-600 uppercase tracking-tight text-white">
                {s.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
