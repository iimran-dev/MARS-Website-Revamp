'use client'

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionWave } from "./SectionWave";

interface CertificationItem {
  id: string;
  index: string;
  code: string;
  description: string;
  category: string;
  details: string;
  industries: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "as9100d",
    index: "01",
    code: "AS9100D",
    description: "Aerospace Series Standards",
    category: "Aviation & Aerospace",
    details:
      "Mandatory quality management system for aviation, space, and defense organizations. Enforces complete material traceability, risk management, counterfeit part mitigation, and total Nadcap audit readiness.",
    industries: "Aviation, Space & Defense, Tier-1 & Tier-2 Primes, Precision Machining",
  },
  {
    id: "iatf16949",
    index: "02",
    code: "IATF 16949",
    description: "Automotive Quality Standard",
    category: "Automotive",
    details:
      "Stringent global automotive quality standard focused on defect prevention, supply chain variation reduction, APQP/PPAP qualification, and continuous capability (Cpk ≥ 1.67).",
    industries: "Passenger Vehicles, Commercial Mobility, Tier-1 & Tier-2 OEM Suppliers",
  },
  {
    id: "iso9001",
    index: "03",
    code: "ISO 9001",
    description: "Quality Management Systems",
    category: "Universal Operations",
    details:
      "The international baseline for process governance, organizational consistency, and systematic quality assurance across all engineering and corporate operations.",
    industries: "Cross-Industry Manufacturing, Engineering, Electronics, Enterprise Tech",
  },
  {
    id: "iso27001",
    index: "04",
    code: "ISO 27001",
    description: "Information Security Management",
    category: "Cyber & Intelligence",
    details:
      "Comprehensive information security framework establishing robust risk governance, safeguarding corporate intellectual property, proprietary CAD assets, and operational IT infrastructure.",
    industries: "Defense Tech, Enterprise SaaS, High-Value IP Manufacturing, Aerospace R&D",
  },
];

export function ExpertiseConstellation() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="constellation"
      ref={ref}
      className="relative overflow-hidden bg-[#06111F] py-20 sm:py-24 md:py-32 text-[#F5F7FA]"
    >
      {/* Top transition wave from Industries */}
      <SectionWave color="text-mars-soft-grey" />

      <div className="container-mars relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#8D98A8] block mb-4 font-medium">
              CERTIFICATIONS & STANDARDS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-600 text-[#F5F7FA] tracking-tight leading-[1.04]">
              Standards that define
              <br className="hidden sm:inline" /> operational excellence.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-sm sm:text-base leading-relaxed text-[#8D98A8] font-sans"
          >
            We guide enterprise organizations across aerospace, automotive, quality management,
            information security, medical devices, environmental governance, and occupational health
            & safety to certified audit readiness and sustained competitive advantage.
          </motion.p>
        </div>

        {/* Editorial Certification Index */}
        <div className="border-t border-white/10">
          {CERTIFICATIONS.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-white/10 transition-colors duration-250 hover:bg-white/[0.025]"
              >
                {/* Clickable Editorial Row */}
                <button
                  type="button"
                  onClick={() => toggleRow(item.id)}
                  className="group w-full py-7 sm:py-8 lg:py-9 px-1 text-left focus:outline-none flex items-center min-h-[105px] md:min-h-[115px]"
                  aria-expanded={isExpanded}
                >
                  {/* Desktop 4-Column Editorial Structure */}
                  <div className="hidden md:flex items-center w-full">
                    {/* Col 1: Index Number (~8%) */}
                    <div className="w-[8%] shrink-0 font-mono text-xs sm:text-sm text-[#8D98A8] tracking-wider transition-colors duration-250 group-hover:text-white">
                      {item.index}
                    </div>

                    {/* Col 2: Certification / Standard Name (~18%) */}
                    <div className="w-[20%] shrink-0 pr-4">
                      <span className="font-display text-xl lg:text-2xl font-600 text-[#F5F7FA] tracking-tight transition-colors duration-250 group-hover:text-white">
                        {item.code}
                      </span>
                    </div>

                    {/* Col 3: Description (~42%) */}
                    <div className="w-[42%] shrink-0 pr-6 text-sm lg:text-base text-[#8D98A8] font-normal leading-snug transition-colors duration-250 group-hover:text-[#F5F7FA]/90">
                      {item.description}
                    </div>

                    {/* Col 4: Industry / Category + Micro Arrow (~30%) */}
                    <div className="w-[30%] shrink-0 flex items-center justify-between pl-2">
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#8D98A8] transition-colors duration-250 group-hover:text-[#F5F7FA]">
                        {item.category}
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-250">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-[#8D98A8] opacity-60 transition-all duration-250 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:text-white"
                        >
                          <path
                            d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Stacked Editorial Item (<768px) */}
                  <div className="md:hidden flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#8D98A8]">
                        {item.index}
                      </span>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#8D98A8]">
                        {item.category}
                      </span>
                    </div>
                    <div className="font-display text-2xl font-600 text-[#F5F7FA] tracking-tight transition-colors duration-250 group-hover:text-white">
                      {item.code}
                    </div>
                    <div className="flex items-baseline justify-between gap-4 pt-0.5">
                      <span className="text-sm text-[#8D98A8] leading-snug">
                        {item.description}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 text-[#8D98A8] opacity-70 transition-transform duration-250 group-hover:translate-x-1.5 group-hover:text-white"
                      >
                        <path
                          d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Smooth Expandable Detail Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.06] bg-white/[0.02] px-4 sm:px-8 py-6 md:py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                          <div className="lg:col-span-8">
                            <span className="font-mono text-[0.65rem] text-[#3FD0FF]/90 uppercase tracking-[0.22em] block mb-2 font-medium">
                              Scope & Architectural Mandate
                            </span>
                            <p className="text-sm sm:text-base leading-relaxed text-[#F5F7FA]/85 font-sans">
                              {item.details}
                            </p>
                          </div>
                          <div className="lg:col-span-4 flex flex-col justify-between gap-4 border-l-0 lg:border-l border-white/[0.08] pl-0 lg:pl-8">
                            <div>
                              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8D98A8] mb-2 font-medium">
                                Target Industries
                              </span>
                              <p className="text-xs sm:text-sm text-[#F5F7FA] font-medium leading-relaxed">
                                {item.industries}
                              </p>
                            </div>
                            <a
                              href="#cta"
                              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#F5F7FA] hover:text-white transition-colors duration-200 group/cta pt-1"
                            >
                              <span>Explore Standard</span>
                              <span className="transition-transform duration-200 group-hover/cta:translate-x-1.5">
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
