'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal, RevealText } from "./primitives";

const FEATURED = {
  category: "Whitepaper",
  title: "When the Audit Ends, the Work Begins",
  excerpt:
    "Why most organizations stall within months of certification — and the operational disciplines that separate a certificate on the wall from a system that performs.",
  read: "12 min read",
  type: "Whitepaper",
};

const SECONDARY = [
  { category: "Article", title: "AS9100 Rev D: what changes for your supplier base", read: "6 min" },
  { category: "Guide", title: "PPAP for the non-automotive engineer", read: "9 min" },
  { category: "Case Study", title: "Reducing CAPA cycle time by 60%", read: "8 min" },
];

const TERTIARY = [
  { category: "Template", title: "Internal audit checklist — AS9100" },
  { category: "Update", title: "IATF 16949 — 2026 sanctioned interpretation" },
  { category: "Article", title: "Supplier scorecards that actually work" },
];

export function KnowledgeCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <section id="knowledge" className="relative overflow-hidden bg-mars-soft-grey py-24 md:py-36">
      <div ref={ref} className="container-mars relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel light>Knowledge Center</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"Knowledge that\nmoves industry\nforward."}
              className="mt-6 font-display text-[clamp(2rem,5vw,4.4rem)] font-600 uppercase leading-[0.95] tracking-[-0.03em] text-mars-navy"
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal delay={0.2}>
              <a
                href="#knowledge"
                className="link-underline inline-flex items-center gap-2 font-mono-tech text-[0.6rem] uppercase tracking-[0.22em] text-mars-navy/60"
              >
                Browse all resources
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Category filter strip */}
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2 border-y border-mars-navy/10 py-4">
            {["All", "Articles", "Case Studies", "Whitepapers", "Industry Updates", "Certification Guides", "Templates"].map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  i === 0
                    ? "bg-mars-navy text-white"
                    : "text-mars-navy/55 hover:text-mars-navy hover:bg-mars-navy/5"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Editorial grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Featured article — large */}
          <motion.a
            href="#knowledge"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-mars-navy lg:col-span-7 lg:aspect-auto lg:min-h-[34rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mars-navy-deep via-mars-navy to-mars-navy-night" />
            <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-mars-red/40 bg-mars-red/10 px-3 py-1 font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-mars-red">
                  {FEATURED.category}
                </span>
                <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/40">
                  {FEATURED.read}
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-600 uppercase leading-[1.02] tracking-[-0.02em] text-white md:text-5xl">
                  {FEATURED.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                  {FEATURED.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-white">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>

          {/* Secondary stack */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {SECONDARY.map((a, i) => (
              <motion.a
                key={a.title}
                href="#knowledge"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex items-start gap-5 border-b border-mars-navy/10 pb-6 last:border-0"
              >
                <span className="font-mono-tech text-[2.5rem] font-600 leading-none text-mars-navy/15 transition-colors duration-300 group-hover:text-mars-red">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.22em] text-mars-red">
                    {a.category}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-600 uppercase leading-tight tracking-tight text-mars-navy transition-colors duration-300 group-hover:text-mars-red md:text-xl">
                    {a.title}
                  </h4>
                  <span className="mt-2 block text-xs text-mars-navy/45">
                    {a.read}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Tertiary list */}
            <div className="mt-2 space-y-3">
              {TERTIARY.map((a) => (
                <a
                  key={a.title}
                  href="#knowledge"
                  className="group flex items-center justify-between border-t border-mars-navy/10 pt-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-[0.5rem] uppercase tracking-[0.18em] text-mars-navy/45">
                      {a.category}
                    </span>
                    <span className="text-sm text-mars-navy/75 transition-colors duration-300 group-hover:text-mars-navy">
                      {a.title}
                    </span>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-mars-navy/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-mars-red">
                    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
