'use client'

import { useState, useEffect } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { SectionWave } from "./SectionWave";

const STEPS = [
  {
    n: "01",
    code: "Assess",
    title: "Current State Diagnostic",
    desc: "A rigorous, unsparing gap analysis against international standards. We map your systems, your risk surface, and your operational reality before recommending a single change.",
    specs: [
      { label: "Standards Scope", val: "ISO 9001 • AS9100 • IATF 16949 • ISO 13485" },
      { label: "Primary Deliverable", val: "Standards Gap Matrix & Risk Surface Heatmap" },
    ],
    metric: "100% Risk Surface Mapped",
  },
  {
    n: "02",
    code: "Design",
    title: "Management Architecture",
    desc: "Engineering the management system from the ground up — process maps, control gateways, KPIs, and the governance layer that makes compliance self-sustaining.",
    specs: [
      { label: "System Focus", val: "Integrated Process Workflows & Control Logic" },
      { label: "Primary Deliverable", val: "Production-Grade Management Architecture & KPIs" },
    ],
    metric: "Zero Administrative Waste",
  },
  {
    n: "03",
    code: "Implement",
    title: "Systems & Capability",
    desc: "Deployment across sites with structured change management and capability building. Your people become the system, not just its operators.",
    specs: [
      { label: "Deployment Scope", val: "Multi-Facility Rollout & Workforce Coaching" },
      { label: "Primary Deliverable", val: "Site Deployment Playbook & Competency Certification" },
    ],
    metric: "100% Operational Adoption",
  },
  {
    n: "04",
    code: "Audit",
    title: "Validation & Scrutiny",
    desc: "Internal audit, management review, and corrective action. We pressure-test the system until it proves it can withstand external scrutiny.",
    specs: [
      { label: "Validation Protocol", val: "Simulated Registrar Audit & Stress Testing" },
      { label: "Primary Deliverable", val: "Corrective Action Verification & C-Suite Sign-Off" },
    ],
    metric: "99.8% Pass Confidence",
  },
  {
    n: "05",
    code: "Certify",
    title: "Accreditation & Scale",
    desc: "Certification achieved with global recognition. Then the work that actually matters — using the certified system to compound performance, scale, and competitive advantage.",
    specs: [
      { label: "Accreditation Level", val: "Globally Recognized International Standard" },
      { label: "Primary Deliverable", val: "Continuous Compounding & RFP Assurance Engine" },
    ],
    metric: "Sustained Operational Alpha",
  },
];

export function TransformationEngine() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("pin");

  const [activeStep, setActiveStep] = useState(0);
  const [phase, setPhase] = useState<"steps" | "final">("steps");

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      // 0 - 0.85: 5 progressive steps
      // 0.85 - 1.0: final transformation state
      if (v > 0.85) {
        setPhase("final");
        setActiveStep(4);
      } else {
        setPhase("steps");
        const seg = Math.max(0, Math.min(1, v / 0.85));
        const idx = Math.min(4, Math.floor(seg * 5));
        setActiveStep(idx);
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  const finalOpacity: MotionValue<number> = useTransform(scrollYProgress, [0.85, 0.93], [0, 1]);
  const stepsOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.83, 0.88], [1, 1, 0.1]);

  return (
    <section id="engine" ref={ref} className="relative h-[450vh] bg-mars-navy-night">
      <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-between overflow-hidden bg-mars-navy-night px-6 py-8 md:px-12 md:py-12 lg:px-20 lg:py-14">
        {/* Top transition wave from FounderImpact (white) */}
        <SectionWave color="text-white" />

        {/* Subtle background atmosphere: minimal grid and deep radial spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-20" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-spotlight opacity-70" aria-hidden />

        {/* Ambient subtle glow accent */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[450px] w-[450px] rounded-full bg-mars-royal/10 blur-[140px]" />

        {/* 2. CENTER: Editorial Composition (Monumental Numeral + Prose + Specs) */}
        <motion.div
          style={{ opacity: stepsOpacity }}
          className="relative z-20 my-auto grid grid-cols-1 items-baseline gap-8 lg:grid-cols-12 lg:gap-16 xl:gap-20"
        >
          {/* Left Column (5 cols): Monumental Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="overflow-hidden">
              <motion.div
                key={`num-${activeStep}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-display text-[clamp(5.5rem,14vw,11.5rem)] font-600 leading-[0.82] tracking-[-0.04em] text-white select-none">
                  {STEPS[activeStep].n}
                </div>
              </motion.div>
            </div>

            <motion.div
              key={`code-${activeStep}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 flex items-center gap-4"
            >
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-600 uppercase tracking-tight text-mars-red">
                {STEPS[activeStep].code}
              </span>
              <span className="h-px flex-1 max-w-[70px] bg-mars-red/40" />
            </motion.div>
          </div>

          {/* Right Column (7 cols): Editorial Prose & Architectural Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              key={`content-${activeStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-500 uppercase leading-[1.05] tracking-[-0.02em] text-white">
                {STEPS[activeStep].title}
              </h3>

              <p className="mt-5 text-base sm:text-lg md:text-xl font-sans leading-relaxed text-white/75 font-normal">
                {STEPS[activeStep].desc}
              </p>

              {/* Minimalist Architectural Specifications */}
              <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-2 sm:gap-8">
                {STEPS[activeStep].specs.map((sp, idx) => (
                  <div key={idx}>
                    <div className="font-mono-tech text-[0.62rem] uppercase tracking-[0.24em] text-white/40 font-medium">
                      {sp.label}
                    </div>
                    <div className="mt-1.5 font-sans text-sm sm:text-base text-white/90 font-medium leading-snug">
                      {sp.val}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. BOTTOM RAIL: Minimalist 5-Phase Interactive Timeline */}
        <div className="relative z-20 border-t border-white/10 pt-5 md:pt-6">
          <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-8">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`group text-left transition-all duration-300 focus:outline-none ${
                  i === activeStep ? "opacity-100" : "opacity-35 hover:opacity-75"
                }`}
              >

              </button>
            ))}
          </div>
        </div>

        {/* 4. FINAL TRANSFORMATION STATE OVERLAY */}
        <motion.div
          style={{ opacity: finalOpacity }}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-mars-navy-night/92 backdrop-blur-md px-6"
        >
          <div className="max-w-4xl text-center">
            <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
              {["Quality Achieved", "Compliance Assured", "Growth Accelerated"].map((t) => (
                <h2
                  key={t}
                  className="font-display text-[clamp(1.5rem,3.2vw,3rem)] font-600 uppercase leading-[0.95] tracking-[-0.02em] text-white"
                >
                  {t}
                </h2>
              ))}
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-white/70">
              From fragmented compliance requirements to measurable, audit-proof operational superiority.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
