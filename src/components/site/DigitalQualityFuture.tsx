'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal, RevealText, StatusDot } from "./primitives";

const MODULES = [
  {
    title: "Audit Tracking",
    meta: "QMS / LIVE",
    value: "94%",
    sub: "Audit closure rate",
    bar: 94,
  },
  {
    title: "CAPA Workflow",
    meta: "Open / 42",
    value: "−68%",
    sub: "Recurrence vs. baseline",
    bar: 68,
  },
  {
    title: "Supplier Monitoring",
    meta: "Sourced / 312",
    value: "A · 81%",
    sub: "Tier-1 conformance",
    bar: 81,
  },
  {
    title: "Training Systems",
    meta: "Active / 5,000+",
    value: "2.4k hrs",
    sub: "Logged this quarter",
    bar: 72,
  },
];

export function DigitalQualityFuture() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <section className="relative overflow-hidden bg-mars-navy-deep py-24 md:py-36">
      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(15,93,255,0.18), transparent 60%)",
        }}
        aria-hidden
      />

      <div ref={ref} className="container-mars relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Digital Quality Future</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"The future of\nquality is digital."}
              className="mt-6 font-display text-[clamp(2.2rem,5.5vw,5rem)] font-600 uppercase leading-[0.95] tracking-[-0.03em] text-white"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-white/55 md:text-base">
                Audit tracking, CAPA workflows, supplier monitoring, training
                systems, and compliance analytics — connected into a single
                operational picture. The system that audits itself.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Floating UI panel composition */}
        <div className="relative mt-16 grid gap-5 lg:mt-20 lg:grid-cols-12">
          {/* Main dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-mars-navy-night/70 p-6 backdrop-blur-xl lg:col-span-7"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-3">
                <StatusDot label="Live · QMS" className="text-mars-cyan/80" />
                <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.22em] text-white/55">
                  Operational Dashboard
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-mars-red" />
              </div>
            </div>

            {/* Stat grid */}
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {MODULES.map((m) => (
                <div key={m.title} className="rounded-lg border border-white/8 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[0.5rem] uppercase tracking-[0.18em] text-white/40">
                      {m.title}
                    </span>
                  </div>
                  <div className="mt-3 font-display text-xl font-600 text-white md:text-2xl">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[0.65rem] text-white/45">{m.sub}</div>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.bar}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-mars-cyan to-mars-red"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder line */}
            <div className="mt-5 flex h-16 items-end gap-1">
              {[40, 55, 35, 70, 60, 85, 75, 95, 80, 100, 90, 110].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${h}%` } : { height: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-mars-royal/40 to-mars-cyan"
                />
              ))}
            </div>
          </motion.div>

          {/* Side: CAPA workflow card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-mars-navy-night/70 p-6 backdrop-blur-xl lg:col-span-5"
          >
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.22em] text-white/55">
                CAPA Workflow
              </span>
              <span className="rounded-full bg-mars-red/15 px-2 py-0.5 font-mono-tech text-[0.5rem] uppercase tracking-[0.18em] text-mars-red">
                42 Open
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { id: "CAPA-0214", t: "Supplier NCR — batch traceability", s: "Investigation", p: 40 },
                { id: "CAPA-0215", t: "Process deviation — Line 3", s: "Containment", p: 65 },
                { id: "CAPA-0216", t: "Document control — SOP-117", s: "Verification", p: 85 },
                { id: "CAPA-0217", t: "Training gap — AS9100D", s: "Closure", p: 95 },
              ].map((c) => (
                <div key={c.id} className="border-b border-white/8 pb-3 last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[0.55rem] tracking-[0.16em] text-mars-cyan/80">
                      {c.id}
                    </span>
                    <span className="text-[0.6rem] text-white/45">{c.s}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/75">{c.t}</p>
                  <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${c.p}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-mars-red"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compliance analytics strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-mars-navy-night/70 p-6 backdrop-blur-xl lg:col-span-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.22em] text-white/55">
                  Compliance Analytics · Live
                </span>
                <p className="mt-1 font-display text-2xl font-600 uppercase tracking-tight text-white md:text-3xl">
                  Standards coverage · <span className="text-mars-cyan">9 active frameworks</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001", "AS9100D", "IATF 16949", "ISO 27001", "ISO 14001", "ISO 45001", "ISO 13485", "ISO 50001", "Lean 6σ"].map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-full border px-3 py-1 font-mono-tech text-[0.5rem] uppercase tracking-[0.16em] ${
                      i < 7
                        ? "border-mars-cyan/30 bg-mars-cyan/10 text-mars-cyan"
                        : "border-white/15 text-white/50"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
