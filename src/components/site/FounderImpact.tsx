'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp } from "./primitives";
import { IMAGES } from "./images";

export function FounderImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <section
      id="founder"
      ref={ref}
      className="relative overflow-hidden bg-white text-mars-navy pt-14 md:pt-20 pb-0"
    >
      {/* Top ambient transition wave from dark section above */}
      <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 text-mars-navy-night block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,20 C1120,54 820,10 460,38 C220,56 0,20 0,20 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container-mars relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left Column: Founder story & leadership link */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-center pb-8 lg:pb-16"
          >
            <span className="font-mono-tech text-xs tracking-[0.24em] text-mars-navy/60 uppercase font-semibold">
              Our Founder
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-600 tracking-tight text-mars-navy leading-[1.08]">
              Experience<br />
              That Makes<br />
              a Difference
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-mars-navy/70 max-w-sm">
              With over 30 years of industry experience, our founder has led thousands of audits, trained professionals and guided organizations towards excellence.
            </p>

            <div className="mt-8 flex items-center gap-5">
              {/* Founder Signature */}
              <svg
                width="110"
                height="40"
                viewBox="0 0 160 56"
                fill="none"
                className="text-mars-navy/80 shrink-0"
                aria-label="Founder signature"
              >
                <path
                  d="M8,40 C20,12 30,12 32,32 C34,48 40,30 48,28 C56,26 60,42 70,38 C82,33 88,20 100,24 C114,29 118,40 128,34 C140,27 148,16 156,28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 font-semibold text-sm text-mars-red hover:text-mars-red/80 transition-colors"
              >
                Our Leadership <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          {/* Center Column: Portrait grounded at bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex items-end justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] h-[360px] sm:h-[420px] lg:h-[470px] overflow-hidden rounded-t-2xl lg:rounded-b-none">
              <img
                src={IMAGES.founder}
                alt="Founder & CEO"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right Column: Pull quote and 4-metric strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between pb-8 lg:pb-16"
          >
            {/* Top quote */}
            <div>
              <span className="text-mars-red text-4xl sm:text-5xl font-serif leading-none block select-none mb-1">
                “
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-600 text-mars-navy leading-tight tracking-tight">
                Quality is not a department.<br />
                It&rsquo;s a mindset.
              </h3>
              <span className="block h-0.5 w-8 bg-mars-red my-3" />
              <p className="text-xs sm:text-sm text-mars-navy/70 leading-relaxed max-w-sm">
                Driving a culture of excellence across industries, one organization at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
