'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel, Reveal } from "./primitives";
import { IMAGES } from "./images";

export function LeadershipPerspective() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <section className="relative overflow-hidden bg-mars-navy-night py-24 md:py-36">
      {/* Faded portrait on the right */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-25" aria-hidden>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.founder})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent md:from-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div ref={ref} className="container-mars relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Leadership Perspective</SectionLabel>
          </Reveal>

          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <span className="block font-display text-[5rem] leading-none text-mars-red/40 md:text-[8rem]">
              &ldquo;
            </span>
            <p className="-mt-6 font-display text-[clamp(1.6rem,3.5vw,3rem)] font-500 leading-[1.08] tracking-[-0.02em] text-white">
              We don&rsquo;t sell certificates. We build organizations that
              <span className="text-mars-red"> perform</span> beyond them —
              systems that hold up under scrutiny and compound under growth.
            </p>
          </motion.blockquote>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              Three decades across aerospace, automotive, and precision
              manufacturing taught a simple truth: the organizations that win
              globally treat quality as an operating system, not a department.
              Everything we do at Mars Sigma is built around that conviction.
            </p>
          </Reveal>

          {/* Signature block */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex items-end gap-6 border-t border-white/8 pt-8">
              <div>
                <svg width="160" height="56" viewBox="0 0 160 56" fill="none" className="text-white" aria-label="Founder signature">
                  <motion.path
                    d="M8,40 C20,12 30,12 32,32 C34,48 40,30 48,28 C56,26 60,42 70,38 C82,33 88,20 100,24 C114,29 118,40 128,34 C140,27 148,16 156,28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <p className="mt-2 font-mono-tech text-[0.58rem] uppercase tracking-[0.26em] text-white/45">
                  Founder · Mars Sigma Solutions
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-mono-tech text-[0.55rem] uppercase tracking-[0.22em] text-mars-red">
                  / Philosophy
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Compliance is the floor.
                  <span className="block">Performance is the ceiling.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
