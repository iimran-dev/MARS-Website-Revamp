'use client'

import { motion, useTransform, type MotionValue } from "framer-motion";
import { SectionLabel, Reveal, RevealText } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { IMAGES } from "./images";

const CASE = {
  industry: "Aerospace · Tier-2 Supplier",
  certification: "AS9100D Rev C",
  challenge:
    "A multi-site aerospace component manufacturer faced repeated non-conformances in traceability and configuration management, threatening its AS9100 certification and a key OEM contract.",
  solution:
    "A 14-week program re-architected the QMS: design and production controls were mapped end-to-end, supplier quality governance was installed, and audit-readiness became a daily discipline rather than an annual event.",
  impact: [
    { stat: "−68%", label: "Non-conformances within 6 months" },
    { stat: "100%", label: "Audit findings closed before recertification" },
    { stat: "2.4×", label: "On-time delivery to OEM" },
  ],
  result:
    "Recertified without major findings. Promoted from provisional to preferred supplier status by the OEM within one cycle.",
  quote:
    "They didn't hand us a manual. They rebuilt how we think about quality as an operating system, not a binder.",
};

export function SuccessStories() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("pass");
  const yImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="stories" className="relative overflow-hidden bg-mars-soft-grey py-24 md:py-36">
      <div className="container-mars relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel light>Real Impact</SectionLabel>
            </Reveal>
            <RevealText
              as="h2"
              text={"Success\nStories"}
              className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] font-600 uppercase leading-[0.88] tracking-[-0.04em] text-mars-navy"
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-mars-navy/65 md:text-base">
                A documented transformation, not a testimonial. The numbers
                below are the point of the work — the certificate is the
                byproduct.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Editorial feature */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <div className="lg:col-span-7">
            <motion.div
              style={{ y: yImg }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mars-navy"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.inspection})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-mars-navy-night/80 via-transparent to-transparent" />
              {/* Floating tag */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-mars-red" />
                <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.2em] text-white/85">
                  {CASE.industry}
                </span>
              </div>
              {/* Bottom overlay caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-mono-tech text-[0.58rem] uppercase tracking-[0.24em] text-mars-cyan/80">
                  Certification achieved
                </p>
                <p className="mt-1 font-display text-xl font-600 uppercase tracking-tight text-white md:text-2xl">
                  {CASE.certification}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono-tech text-[0.58rem] uppercase tracking-[0.26em] text-mars-navy/40">
                / Case Study 01
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-4 font-display text-2xl font-600 uppercase leading-tight tracking-tight text-mars-navy md:text-3xl">
                From non-conformance to preferred supplier
              </h3>
            </Reveal>

            <div className="mt-8 space-y-8">
              {[
                { label: "Challenge", text: CASE.challenge },
                { label: "Solution", text: CASE.solution },
                { label: "Business Result", text: CASE.result },
              ].map((b, i) => (
                <Reveal key={b.label} delay={0.15 + i * 0.1}>
                  <div className="border-l-2 border-mars-navy/15 pl-5">
                    <p className="font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-mars-red">
                      {b.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mars-navy/70 md:text-[0.95rem]">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Impact metrics */}
            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-mars-navy/10 pt-6">
                {CASE.impact.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-2xl font-600 text-mars-red md:text-3xl">
                      {m.stat}
                    </div>
                    <div className="mt-1 text-[0.7rem] leading-tight text-mars-navy/55">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Client quote */}
            <Reveal delay={0.5}>
              <blockquote className="mt-10 border-l-2 border-mars-red pl-5">
                <p className="font-display text-lg font-500 leading-snug text-mars-navy md:text-xl">
                  &ldquo;{CASE.quote}&rdquo;
                </p>
                <footer className="mt-3 font-mono-tech text-[0.55rem] uppercase tracking-[0.24em] text-mars-navy/45">
                  — Quality Director, Aerospace Tier-2
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
