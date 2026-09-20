'use client'

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionLabel, Reveal, RevealText, Crosshair } from "./primitives";
import { IMAGES } from "./images";

const INDUSTRIES = [
  {
    id: "aerospace",
    name: "Aerospace",
    img: IMAGES.aerospace,
    desc: "AS9100 systems, traceability, and supplier qualification across the aerospace supply chain.",
    tag: "AS9100D",
  },
  {
    id: "automotive",
    name: "Automotive",
    img: IMAGES.automotive,
    desc: "IATF 16949 deployment, PPAP control, and process capability for tiered supply networks.",
    tag: "IATF 16949",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    img: IMAGES.manufacturing,
    desc: "Lean Six Sigma, OEE uplift, and quality systems that survive high-mix production.",
    tag: "ISO 9001",
  },
  {
    id: "medical",
    name: "Medical Devices",
    img: IMAGES.medical,
    desc: "Regulatory-aligned QMS for medical device design, production, and post-market surveillance.",
    tag: "ISO 13485",
  },
  {
    id: "engineering",
    name: "Engineering",
    img: IMAGES.engineering,
    desc: "Design controls, configuration management, and engineering process governance.",
    tag: "ISO 9001",
  },
  {
    id: "electronics",
    name: "Electronics",
    img: IMAGES.electronics,
    desc: "ESD controls, SPC, and high-reliability manufacturing for electronics production.",
    tag: "IPC / ISO 9001",
  },
];

export function Industries() {
  const [active, setActive] = useState(0);
  const mref = useRef<HTMLDivElement>(null);
  const mInView = useInView(mref, { once: true, margin: "-10% 0px" });

  return (
    <section id="industries" className="relative overflow-hidden bg-mars-soft-grey py-24 md:py-36">
      {/* Header */}
      <div className="container-mars">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel light>Industries Impacted</SectionLabel>
            </Reveal>
            <div className="mt-6 flex items-baseline gap-4">
              <RevealText
                as="h2"
                text={"20+"}
                className="font-display text-[clamp(4rem,12vw,10rem)] font-600 leading-[0.85] tracking-[-0.04em] text-mars-navy"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-mars-navy/65 md:text-base">
                From aerospace to medical devices, we operate where precision
                is non-negotiable. Each industry brings its own regulatory
                language — we translate standards into operational fluency.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Curved immersive panels — desktop */}
      <div className="container-mars mt-16 hidden md:block">
        <div className="flex h-[34rem] gap-3">
          {INDUSTRIES.map((ind, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={ind.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full min-w-0 cursor-pointer overflow-hidden rounded-[2rem] bg-neutral-900"
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${ind.img})` }}
                  animate={{ scale: isActive ? 1.05 : 1.12 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Neutral bottom gradient for typography readability without blue wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Vertical name (collapsed) */}
                <div className="absolute left-0 top-0 h-full w-full">
                  {!isActive && (
                    <div className="flex h-full items-center justify-center px-2">
                      <span className="vertical-text font-display text-2xl font-600 uppercase tracking-[0.18em] text-white/90">
                        {ind.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-end p-8"
                    >
                      <h3 className="mt-4 font-display text-4xl font-600 uppercase tracking-tight text-white md:text-5xl">
                        {ind.name}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                        {ind.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Index marker */}
                <div className="absolute left-4 top-4 font-mono-tech text-[0.55rem] uppercase tracking-[0.18em] text-white/40">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile — stacked cards */}
      <div ref={mref} className="container-mars mt-12 space-y-5 md:hidden">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.id}
            initial={{ opacity: 0, y: 24 }}
            animate={mInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative h-64 overflow-hidden rounded-2xl bg-neutral-900"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ind.img})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="mt-3 font-display text-3xl font-600 uppercase tracking-tight text-white">
                {ind.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
