'use client'

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, RevealText, Reveal } from "./primitives";
import { MarsSigmaMark } from "./Logo";

type Node = {
  id: string;
  code: string;
  name: string;
  desc: string;
};

const NODES: Node[] = [
  { id: "iso9001", code: "ISO 9001", name: "Quality Management", desc: "Foundational QMS for any organization seeking consistency, control, and continual improvement." },
  { id: "as9100", code: "AS9100", name: "Aerospace Series", desc: "Aerospace quality management for design, manufacture, and service of aviation and space products." },
  { id: "iso27001", code: "ISO 27001", name: "Information Security", desc: "Information security management systems protecting confidentiality, integrity, and availability." },
  { id: "iatf16949", code: "IATF 16949", name: "Automotive QMS", desc: "Automotive industry quality management for the global supply chain." },
  { id: "iso14001", code: "ISO 14001", name: "Environmental", desc: "Environmental management systems reducing footprint and ensuring compliance." },
  { id: "iso45001", code: "ISO 45001", name: "Occupational H&S", desc: "Occupational health and safety management for safer, more resilient operations." },
  { id: "lean", code: "Lean Six Sigma", name: "Operational Performance", desc: "Process improvement methodology combining lean elimination of waste with statistical quality control." },
  { id: "supplier", code: "Supplier Development", name: "Supply Chain Quality", desc: "Structured supplier assessment, development, and performance governance." },
  { id: "tpi", code: "Third-Party Inspection", name: "Independent Verification", desc: "Independent inspection of materials, processes, and finished products." },
];

export function ExpertiseConstellation() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const activeNode = NODES.find((n) => n.id === active);

  // Geometric arrangement — 9 nodes evenly spaced on a circle
  const R = 36; // radius percentage from center
  const positions = NODES.map((_, i) => {
    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(angle) * R, y: 50 + Math.sin(angle) * R * 0.62 };
  });

  return (
    <section id="constellation" className="relative overflow-hidden bg-mars-navy-night py-24 md:py-36">
      {/* Background grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-spotlight" aria-hidden />

      <div ref={ref} className="container-mars relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>The Mars Sigma Approach</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"From Compliance\nto Competitive\nAdvantage"}
              className="mt-6 font-display text-[clamp(2.2rem,5.5vw,5rem)] font-600 uppercase leading-[0.92] tracking-[-0.03em] text-white"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-white/55 md:text-base">
                A single source of expertise across the standards that govern
                global industry. Each node connects to a central operational
                philosophy — systems that perform beyond the audit.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Constellation */}
        <div className="relative mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="relative mx-auto aspect-square w-full max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden
              >
                {/* Outer orbital ring */}
                <motion.ellipse
                  cx="50"
                  cy="50"
                  rx="40"
                  ry="24.8"
                  fill="none"
                  stroke="rgba(63,208,255,0.18)"
                  strokeWidth="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Inner ring */}
                <motion.ellipse
                  cx="50"
                  cy="50"
                  rx="22"
                  ry="13.6"
                  fill="none"
                  stroke="rgba(63,208,255,0.12)"
                  strokeWidth="0.15"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Connection lines from center to each node */}
                {positions.map((p, i) => {
                  const isActive = active === NODES[i].id;
                  return (
                    <motion.line
                      key={NODES[i].id}
                      x1="50"
                      y1="50"
                      x2={p.x}
                      y2={p.y}
                      stroke={isActive ? "#E11D2A" : "rgba(255,255,255,0.18)"}
                      strokeWidth={isActive ? 0.5 : 0.25}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  );
                })}
              </svg>

              {/* Center core */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-mars-navy-night/80 backdrop-blur-md md:h-28 md:w-28">
                  <div className="absolute inset-0 rounded-full bg-mars-red/10 blur-xl" />
                  <MarsSigmaMark size={44} className="relative text-white" />
                  <div className="absolute -inset-3 rounded-full border border-mars-red/30" />
                </div>
              </motion.div>

              {/* Orbital nodes */}
              {positions.map((p, i) => {
                const node = NODES[i];
                const isActive = active === node.id;
                return (
                  <motion.button
                    key={node.id}
                    type="button"
                    onMouseEnter={() => setActive(node.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(node.id)}
                    onBlur={() => setActive(null)}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <div
                      className={`relative flex h-16 w-16 flex-col items-center justify-center rounded-full border bg-mars-navy-deep/80 text-center backdrop-blur-sm transition-all duration-300 md:h-20 md:w-20 ${
                        isActive
                          ? "border-mars-red scale-110 shadow-[0_0_30px_rgba(225,29,42,0.4)]"
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      <span
                        className={`font-display text-[0.62rem] font-600 uppercase leading-tight tracking-tight md:text-[0.72rem] ${
                          isActive ? "text-white" : "text-white/80"
                        }`}
                      >
                        {node.code}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Side info panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/8 lg:pl-12">
            <motion.div
              key={active ?? "default"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-28"
            >
              {activeNode ? (
                <>
                  <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.28em] text-mars-red">
                    / Selected node
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-600 uppercase tracking-tight text-white md:text-3xl">
                    {activeNode.code}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-white/45">
                    {activeNode.name}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-white/65 md:text-base">
                    {activeNode.desc}
                  </p>
                </>
              ) : (
                <>
                  <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.28em] text-white/40">
                    / Hover a node
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-600 uppercase tracking-tight text-white md:text-3xl">
                    A Global Quality Ecosystem
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/55 md:text-base">
                    Nine integrated disciplines orbit a single operational
                    philosophy. Move your pointer across any node to inspect the
                    standard and how it compounds with the rest of the network.
                  </p>
                </>
              )}
              <div className="mt-10 border-t border-white/8 pt-6">
                <p className="font-mono-tech text-[0.58rem] uppercase tracking-[0.26em] text-white/35">
                  9 systems · 1 philosophy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
