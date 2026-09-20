'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "./images";

const CASE = {
  category: "Documented Case // Aerospace Tier-2",
  standard: "AS9100D Certification",
  headline: "From repeated non-conformance to preferred OEM supplier status.",
  narrative:
    "Facing critical non-conformances in traceability and configuration management, this multi-site manufacturer was on the verge of losing its AS9100 certification and a flagship OEM supply contract. Over a 14-week engagement, MARS re-engineered the quality architecture — transforming compliance from an annual audit binder into a daily operational discipline.",
  stats: [
    { value: "−68%", label: "Non-conformances within 6 months" },
    { value: "100%", label: "Findings closed before audit" },
    { value: "2.4×", label: "On-time delivery to OEM" },
  ],
  quote:
    "They didn't hand us a manual. They rebuilt how we think about quality as an operating system, not a binder.",
  author: "Director of Quality, Tier-2 Aerospace Manufacturer",
};

export function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="stories" ref={ref} className="relative overflow-hidden bg-mars-soft-grey py-24 md:py-32">
      <div className="container-mars relative">
        {/* Minimalist Section Header */}
        <div className="flex flex-col gap-4 border-b border-mars-navy/10 pb-8 md:flex-row md:items-end md:justify-between md:pb-12">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-[0.24em] text-mars-red font-semibold">
              Real Impact // Documented Case
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-600 uppercase tracking-tight text-mars-navy leading-none">
              Success Stories
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-mars-navy/65 font-sans">
            Documented operational transformation. The metrics below represent the real work — certification is the byproduct.
          </p>
        </div>

        {/* Minimalist Editorial Split */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Image (Newspapers on wooden table) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-neutral-200 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <img
                src={IMAGES.newspaper}
                alt="Documented case record"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Case Story & Measured Impact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >

            {/* Headline */}
            <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-600 uppercase tracking-tight text-mars-navy leading-tight">
              {CASE.headline}
            </h3>

            {/* Narrative */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-mars-navy/70 font-sans">
              {CASE.narrative}
            </p>

            {/* Minimal Metrics Row */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-mars-navy/10 py-6">
              {CASE.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-3xl font-600 text-mars-red tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-mars-navy/60 font-sans">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Minimal Pullquote */}
            <div className="mt-6 border-l-2 border-mars-red pl-4">
              <p className="font-sans text-sm sm:text-base italic text-mars-navy/85 leading-relaxed">
                &ldquo;{CASE.quote}&rdquo;
              </p>
              <div className="mt-2 font-mono-tech text-[0.68rem] uppercase tracking-wider text-mars-navy/50">
                — {CASE.author}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
