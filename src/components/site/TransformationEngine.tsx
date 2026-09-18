'use client'

import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useInView, type MotionValue } from "framer-motion";
import { SectionLabel, Crosshair } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";

const STEPS = [
  { n: "01", code: "Assess", title: "Current State", desc: "Gap analysis against international standards. We map your systems, your risk surface, and your operational reality before recommending a single change." },
  { n: "02", code: "Design", title: "Solutions", desc: "Architecture of the management system — process maps, controls, KPIs, and the governance layer that makes compliance self-sustaining." },
  { n: "03", code: "Implement", title: "Systems & Training", desc: "Deployment across sites with structured change management and capability building. Your people become the system, not just its operators." },
  { n: "04", code: "Audit", title: "Validate", desc: "Internal audit, management review, and corrective action. We pressure-test the system until it proves it can withstand external scrutiny." },
  { n: "05", code: "Certify", title: "& Grow", desc: "Certification achieved. Then the work that actually matters — using the certified system to compound performance, scale, and competitive advantage." },
];

export function TransformationEngine() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("pin");

  const [activeStep, setActiveStep] = useState(0);
  const [phase, setPhase] = useState<"draw" | "steps" | "final">("draw");

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      // 0 - 0.12: blueprint drawing
      // 0.12 - 0.82: steps (5 segments)
      // 0.82 - 1: final state
      if (v < 0.12) {
        setPhase("draw");
        setActiveStep(0);
      } else if (v > 0.82) {
        setPhase("final");
        setActiveStep(4);
      } else {
        setPhase("steps");
        const seg = (v - 0.12) / 0.7; // 0..1
        const idx = Math.min(4, Math.floor(seg * 5));
        setActiveStep(idx);
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Path lengths for SVG drawing
  const pathProgress: MotionValue<number> = useTransform(scrollYProgress, [0, 0.82], [0, 1]);
  const blueprintOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.08], [0.5, 1]);
  const finalOpacity: MotionValue<number> = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);
  const stepsOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.8, 0.86], [1, 1, 0.25]);

  return (
    <section id="engine" ref={ref} className="relative h-[450vh] bg-mars-navy-night">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />

        {/* Top header bar */}
        <div className="absolute inset-x-0 top-0 z-30 border-b border-white/8 bg-mars-navy-night/40 backdrop-blur-sm">
          <div className="container-mars flex h-14 items-center justify-between">
            <SectionLabel>Excellence Transformation Engine&trade;</SectionLabel>
            <div className="hidden items-center gap-4 font-mono-tech text-[0.58rem] uppercase tracking-[0.24em] text-white/45 md:flex">
              <span>Section 07</span>
              <span className="text-white/20">/</span>
              <Crosshair className="text-mars-cyan/60" />
              <span>Transformation Sequence</span>
            </div>
          </div>
        </div>

        {/* Main composition */}
        <div className="container-mars relative z-20 grid h-full grid-cols-1 items-center pt-14 lg:grid-cols-12">
          {/* LEFT — Step counter + path */}
          <div className="lg:col-span-5">
            <motion.div style={{ opacity: stepsOpacity }}>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[clamp(4rem,12vw,9rem)] font-600 leading-none tracking-tighter text-white">
                  {STEPS[activeStep].n}
                </span>
                <span className="font-mono-tech text-[0.62rem] uppercase tracking-[0.28em] text-white/40">
                  / 05
                </span>
              </div>
              <h3 className="mt-2 font-display text-3xl font-600 uppercase tracking-tight text-mars-red md:text-4xl">
                {STEPS[activeStep].code}
              </h3>
            </motion.div>

            {/* Vertical progress path */}
            <div className="mt-10 hidden gap-2 lg:flex">
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className={`flex-1 transition-all duration-500 ${
                    i <= activeStep ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <div
                    className={`h-1 w-full rounded-full transition-colors duration-500 ${
                      i === activeStep
                        ? "bg-mars-red"
                        : i < activeStep
                        ? "bg-mars-cyan/60"
                        : "bg-white/15"
                    }`}
                  />
                  <div className="mt-2 font-mono-tech text-[0.55rem] uppercase tracking-[0.18em] text-white/50">
                    {s.code}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Step description + blueprint */}
          <div className="relative lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <h4 className="font-display text-2xl font-500 uppercase tracking-tight text-white md:text-3xl">
                {STEPS[activeStep].title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                {STEPS[activeStep].desc}
              </p>
            </motion.div>

            {/* Blueprint SVG overlay */}
            <motion.div
              style={{ opacity: blueprintOpacity }}
              className="pointer-events-none absolute -right-10 -top-24 hidden h-[28rem] w-[28rem] lg:block"
            >
              <BlueprintSVG progress={pathProgress} activeStep={activeStep} />
            </motion.div>
          </div>
        </div>

        {/* FINAL STATE overlay — no backdrop-blur (blur would apply even at
            opacity 0 and obscure the step content behind during draw/steps) */}
        <motion.div
          style={{ opacity: finalOpacity }}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-mars-navy-night/85"
        >
          <div className="container-mars text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={phase === "final" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
              className="font-mono-tech text-[0.62rem] uppercase tracking-[0.32em] text-mars-red"
            >
              / Final state
            </motion.span>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
              {["Quality Achieved", "Compliance Assured", "Growth Accelerated"].map((t, i) => (
                <motion.h2
                  key={t}
                  initial={{ opacity: 0, y: 30 }}
                  animate={phase === "final" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[clamp(1.6rem,3.5vw,3.5rem)] font-600 uppercase leading-[0.95] tracking-[-0.02em] text-white"
                >
                  {t}
                </motion.h2>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase === "final" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-sm text-white/50 md:text-base"
            >
              From compliance requirements to measurable operational performance.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll progress rail (right edge) */}
        <div className="absolute bottom-8 right-8 z-30 hidden items-center gap-3 md:flex">
          <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-white/40">
            Scroll to advance
          </span>
          <div className="h-16 w-px bg-white/15">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="h-full w-full origin-top bg-mars-red"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Blueprint SVG: a schematic that draws progressively ---- */
function BlueprintSVG({ progress, activeStep }: { progress: MotionValue<number>; activeStep: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <svg ref={ref} viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <motion.g style={{ opacity: 0.9 }}>
        {/* Outer concentric circles */}
        {[180, 140, 100, 60].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(63,208,255,0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Crosshairs */}
        <motion.line x1="200" y1="10" x2="200" y2="390" stroke="rgba(63,208,255,0.2)" strokeWidth="0.4" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 0.4 }} />
        <motion.line x1="10" y1="200" x2="390" y2="200" stroke="rgba(63,208,255,0.2)" strokeWidth="0.4" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 0.4 }} />

        {/* Diagonal measurement lines */}
        <motion.line x1="50" y1="50" x2="350" y2="350" stroke="rgba(63,208,255,0.1)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2, delay: 0.6 }} />

        {/* Spiral path that draws with progress */}
        <motion.path
          d="M200,200 m-160,0 a160,160 0 1,1 320,0 a120,120 0 1,1 -240,0 a80,80 0 1,1 160,0"
          fill="none"
          stroke="#E11D2A"
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            pathLength: progress,
          }}
        />

        {/* 5 step nodes on the spiral */}
        {[
          { x: 40, y: 200 },
          { x: 200, y: 40 },
          { x: 360, y: 200 },
          { x: 280, y: 320 },
          { x: 120, y: 320 },
        ].map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={i === activeStep ? 6 : 3}
              fill={i === activeStep ? "#E11D2A" : i < activeStep ? "#3FD0FF" : "rgba(255,255,255,0.3)"}
              className="transition-all duration-500"
            />
            {i === activeStep && (
              <circle cx={p.x} cy={p.y} r="12" fill="none" stroke="#E11D2A" strokeWidth="0.8" opacity="0.5" />
            )}
          </g>
        ))}

        {/* Corner dimension annotations */}
        <text x="20" y="30" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">01.ASSESS</text>
        <text x="330" y="30" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">02.DESIGN</text>
        <text x="20" y="390" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">04.AUDIT</text>
        <text x="320" y="390" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">05.CERTIFY</text>
      </motion.g>
    </svg>
  );
}
