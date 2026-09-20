'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "./images";
import { SectionWave } from "./SectionWave";

const FEATURED = {
  category: "Featured Whitepaper",
  badge: "Whitepaper // Core Governance",
  title: "When the Audit Ends, the Work Begins",
  excerpt:
    "Why most organizations stall within months of certification — and the operational disciplines that separate a certificate on the wall from a system that performs.",
  read: "12 min read",
  edition: "2026 Executive Edition",
};

const ARTICLES = [
  {
    category: "Aerospace Standard",
    title: "AS9100 Rev D: What changes for your tier-1 supplier base",
    read: "6 min read",
  },
  {
    category: "Engineering Guide",
    title: "PPAP for the non-automotive engineer: an operational field manual",
    read: "9 min read",
  },
  {
    category: "Operational Case",
    title: "Reducing CAPA cycle time by 60% across multi-site plants",
    read: "8 min read",
  },
];

const TEMPLATES = [
  {
    tag: "Template",
    title: "Internal audit checklist — AS9100",
  },
  {
    tag: "Update",
    title: "IATF 16949 — 2026 sanctioned interpretation",
  },
  {
    tag: "Tool",
    title: "Supplier scorecards that actually work",
  },
];

export function KnowledgeCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="knowledge"
      ref={ref}
      className="relative overflow-hidden bg-mars-soft-grey py-20 md:py-28 text-mars-navy"
    >
      {/* Top transition wave from TrustedLeaders */}
      <SectionWave color="text-mars-navy-night" />

      <div className="container-mars relative">
        {/* Consistent Section Header matching SuccessStories */}
        <div className="flex flex-col gap-4 border-b border-mars-navy/10 pb-8 md:flex-row md:items-end md:justify-between md:pb-12">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-[0.24em] text-mars-red font-semibold">
              Field Intelligence // Research Archive
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-600 uppercase tracking-tight text-mars-navy leading-none">
              Knowledge Center
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-mars-navy/65 font-sans sm:text-right">
              Operational insights, compliance architecture, and engineering toolkits distilled from over three decades on global manufacturing floors.
            </p>
            <a
              href="#knowledge"
              className="group inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-mars-red font-semibold hover:text-mars-red-bright transition-colors"
            >
              <span>Browse All Resources</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M2 7H12M12 7L7 2M12 7L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Cohesive Editorial 2-Column Split */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10 items-stretch">
          {/* Left Column: Featured Whitepaper Showcase */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-6 flex flex-col justify-between rounded-2xl border border-black/5 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:border-mars-navy/20"
          >
            {/* Featured Visual Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
              <img
                src={IMAGES.knowledge}
                alt="Audit analysis, calculation and documentation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mars-navy/70 via-mars-navy/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-mars-red px-3 py-1 font-mono-tech text-[0.62rem] uppercase tracking-[0.2em] font-semibold text-white">
                  {FEATURED.category}
                </span>
              </div>
              
              <div className="absolute bottom-3 right-4 font-mono-tech text-xs text-white/80 font-medium">
                {FEATURED.read}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-mono-tech text-[0.65rem] uppercase tracking-[0.22em] text-mars-navy/50 font-semibold">
                  {FEATURED.badge}
                </span>
                <h3 className="mt-2.5 font-display text-2xl sm:text-3xl font-600 tracking-tight text-mars-navy transition-colors duration-200 group-hover:text-mars-red leading-tight">
                  <a href="#knowledge">{FEATURED.title}</a>
                </h3>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-mars-navy/65 font-sans">
                  {FEATURED.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mars-navy/10 flex items-center justify-between">
                <a
                  href="#knowledge"
                  className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.18em] font-semibold text-mars-navy group-hover:text-mars-red transition-colors"
                >
                  <span>Read Full Publication</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M2 7H12M12 7L7 2M12 7L7 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <span className="font-mono-tech text-[0.68rem] uppercase tracking-wider text-mars-navy/40">
                  {FEATURED.edition}
                </span>
              </div>
            </div>
          </motion.article>

          {/* Right Column: Articles & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
          >
            <div>
              {/* Card Subheader */}
              <div className="flex items-center justify-between border-b border-mars-navy/10 pb-4">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] font-semibold text-mars-navy/60">
                  Selected Dispatches & Field Analyses
                </span>
                <span className="font-mono-tech text-[0.65rem] uppercase tracking-widest text-mars-red font-semibold">
                  Latest
                </span>
              </div>

              {/* Numbered Articles Stack */}
              <div className="divide-y divide-mars-navy/10">
                {ARTICLES.map((article, idx) => (
                  <a
                    key={article.title}
                    href="#knowledge"
                    className="group flex items-start gap-4 py-5 first:pt-4 last:pb-4 transition-colors"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-600 leading-none text-mars-navy/20 transition-colors duration-200 group-hover:text-mars-red shrink-0 pt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono-tech text-[0.62rem] uppercase tracking-[0.2em] text-mars-red font-semibold">
                          {article.category}
                        </span>
                        <span className="text-mars-navy/25">·</span>
                        <span className="font-mono-tech text-[0.62rem] text-mars-navy/40">
                          {article.read}
                        </span>
                      </div>
                      <h4 className="font-display text-base sm:text-lg font-600 tracking-tight text-mars-navy transition-colors duration-200 group-hover:text-mars-red leading-snug">
                        {article.title}
                      </h4>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-mars-navy/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-mars-red mt-1 shrink-0"
                    >
                      <path
                        d="M2 7H12M12 7L7 2M12 7L7 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Frameworks / Downloadable Templates */}
            <div className="mt-6 pt-6 border-t border-mars-navy/10">
              <span className="block font-mono-tech text-[0.65rem] uppercase tracking-[0.22em] text-mars-navy/50 font-semibold mb-3">
                Downloadable Frameworks & Checklists
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TEMPLATES.map((tmpl) => (
                  <a
                    key={tmpl.title}
                    href="#knowledge"
                    className="group rounded-xl border border-mars-navy/10 bg-mars-soft-grey/60 p-3.5 transition-all duration-200 hover:border-mars-navy/25 hover:bg-white flex flex-col justify-between"
                  >
                    <span className="font-mono-tech text-[0.58rem] uppercase tracking-wider text-mars-red font-semibold mb-1">
                      {tmpl.tag}
                    </span>
                    <span className="text-xs font-medium text-mars-navy/80 group-hover:text-mars-navy leading-snug line-clamp-2 transition-colors">
                      {tmpl.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
