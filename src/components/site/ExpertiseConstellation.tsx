'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MarsSigmaMark } from "./Logo";

type Node = {
  id: string;
  code: string;
  index: string;
  name: string;
  desc: string;
  points: string[];
};

const NODES: Node[] = [
  {
    id: "iso9001",
    code: "ISO 9001",
    index: "01",
    name: "Quality Management Systems",
    desc: "The universal baseline for process control, organizational consistency, and continual operational performance across all enterprise operations.",
    points: ["Process Standardization", "Defect Prevention", "Management Review"]
  },
  {
    id: "as9100",
    code: "AS9100D",
    index: "02",
    name: "Aerospace Series Standards",
    desc: "Rigorous quality management demanded across aviation, space, and defense supply chains with total material traceability and risk control.",
    points: ["Full Material Traceability", "Risk Assessment", "Critical Component Verification"]
  },
  {
    id: "iso27001",
    code: "ISO 27001",
    index: "03",
    name: "Information Security",
    desc: "Comprehensive information security frameworks guarding corporate intellectual property, client data integrity, and operational infrastructure.",
    points: ["Enterprise Data Security", "Risk Mitigation", "Regulatory Governance"]
  },
  {
    id: "iatf16949",
    code: "IATF 16949",
    index: "04",
    name: "Automotive Quality Standard",
    desc: "Stringent automotive sector quality systems designed for variation reduction, PPAP qualification, and continuous supply chain capability.",
    points: ["APQP / PPAP Rigor", "Variation Reduction", "Tier-1 Supply Chain Alignment"]
  },
  {
    id: "iso14001",
    code: "ISO 14001",
    index: "05",
    name: "Environmental Management",
    desc: "Proactive environmental governance systems reducing corporate environmental footprint, conserving energy, and assuring compliance.",
    points: ["Environmental Compliance", "Energy Efficiency", "Waste Reduction"]
  },
  {
    id: "iso45001",
    code: "ISO 45001",
    index: "06",
    name: "Occupational Health & Safety",
    desc: "Systematic hazard identification and safety controls ensuring resilient, hazard-free operations and global regulatory compliance.",
    points: ["Hazard Elimination", "Workplace Safety Culture", "Accident Prevention"]
  },
  {
    id: "lean",
    code: "Lean 6σ",
    index: "07",
    name: "Operational Excellence",
    desc: "Data-driven process improvement merging lean waste elimination with statistical process control to maximize yields and throughput.",
    points: ["DMAIC Methodology", "Yield & OEE Uplift", "Statistical Process Control"]
  },
  {
    id: "supplier",
    code: "Supplier QA",
    index: "08",
    name: "Supply Chain Development",
    desc: "Structured supplier qualification, rigorous supplier audits, and vendor quality governance ensuring consistent incoming component fidelity.",
    points: ["Vendor Quality Audits", "Supplier Scorecards", "Incoming Part Reliability"]
  },
  {
    id: "tpi",
    code: "TPI",
    index: "09",
    name: "Independent Inspection",
    desc: "Accredited third-party inspection of raw materials, critical manufacturing processes, and finished goods prior to global deployment.",
    points: ["Objective Verification", "Stage-Gate Inspection", "Independent Certification"]
  },
];

export function ExpertiseConstellation() {
  const [activeId, setActiveId] = useState<string>("iso9001");
  const activeIndex = NODES.findIndex((n) => n.id === activeId);
  const activeNode = NODES[activeIndex >= 0 ? activeIndex : 0];

  // Simple, ordinary circle radius percentage
  const R = 38;
  const positions = NODES.map((_, i) => {
    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + Math.cos(angle) * R,
      y: 50 + Math.sin(angle) * R,
    };
  });

  const activePos = positions[activeIndex >= 0 ? activeIndex : 0];

  return (
    <section
      id="constellation"
      className="relative bg-mars-navy-night py-16 md:py-24 text-white"
    >
      <div className="container-mars">
        {/* Header — modern, crisp and simple */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-mars-cyan">
              Frameworks & Accreditations
            </span>
            <h2 className="mt-2 font-display text-3xl font-600 uppercase tracking-tight text-white md:text-4xl">
              Standards & Certifications
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base leading-relaxed">
            Nine interconnected disciplines operating as one unified management system that outperforms standard audits.
          </p>
        </div>

        {/* Modern Interactive Circle + Editorial Display */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: Modern Minimal Circle Display */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]">
              {/* Circular track and active connection ray */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden>
                {/* Clean circular track */}
                <circle
                  cx="50"
                  cy="50"
                  r={R}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="0.75"
                />
                {/* Active ray connecting center to selected node */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={activePos.x}
                  y2={activePos.y}
                  stroke="#E11D2A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ x2: activePos.x, y2: activePos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              </svg>

              {/* Center glass disc */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full border border-white/15 bg-mars-navy-deep/95 shadow-xl backdrop-blur-md">
                <MarsSigmaMark size={28} className="text-white" />
              </div>

              {/* Minimal modern circular nodes */}
              {positions.map((p, i) => {
                const node = NODES[i];
                const isActive = activeId === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    onMouseEnter={() => setActiveId(node.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    aria-label={node.code}
                  >
                    <div
                      className={`flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-full border text-center transition-all duration-300 ${
                        isActive
                          ? "border-mars-red bg-mars-red text-white scale-110 shadow-[0_0_24px_rgba(225,29,42,0.45)]"
                          : "border-white/15 bg-mars-navy-deep/90 text-white/70 hover:border-white/40 hover:text-white hover:scale-105 backdrop-blur-sm"
                      }`}
                    >
                      <span className="px-1 text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem] font-semibold tracking-tight leading-tight">
                        {node.code}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Modern Editorial Details */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-mars-red" />
                  <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-mars-cyan">
                    Standard {activeNode.index}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-600 uppercase tracking-tight text-white leading-tight">
                  {activeNode.name}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {activeNode.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
