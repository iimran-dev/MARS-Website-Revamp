'use client'

import { motion, useTransform, type MotionValue } from "framer-motion";
import { SectionLabel, Reveal, RevealText, Crosshair } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { IMAGES } from "./images";

const TIMELINE = [
  { year: "1994", label: "Beginnings in industrial quality" },
  { year: "2002", label: "Led aerospace QMS deployment" },
  { year: "2010", label: "Scaled multi-site certification programs" },
  { year: "2018", label: "Founded Mars Sigma Solutions" },
  { year: "2026", label: "Global operational excellence advisory" },
];

export function FounderImpact() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("pass");
  const yImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const lineProgress: MotionValue<number> = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

  return (
    <section id="founder" ref={ref} className="relative overflow-hidden bg-mars-soft-grey py-24 md:py-36">
      {/* Subtle blueprint background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,27,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(8,27,58,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <div className="container-mars relative">
        {/* Top eyebrow */}
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionLabel light>Our Founder</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:flex lg:justify-end">
            <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.28em] text-mars-navy/40">
              Figure 01 · Leadership
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* Portrait — left, asymmetric */}
          <div className="lg:col-span-5 lg:col-start-1">
            <motion.div
              style={{ y: yImg }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-mars-navy"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${IMAGES.founder})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mars-navy-night/70 via-transparent to-transparent" />
              {/* Technical corner markers */}
              <div className="absolute left-4 top-4 text-mars-cyan/70">
                <Crosshair />
              </div>
              <div className="absolute right-4 top-4 text-mars-cyan/70">
                <Crosshair />
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white/70">
                <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.22em]">
                  Founder · CEO
                </span>
                <span className="font-mono-tech text-[0.55rem] uppercase tracking-[0.22em]">
                  EST. 2018
                </span>
              </div>
            </motion.div>
          </div>

          {/* Content — right, wider */}
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              text={"Experience\nThat Makes\na Difference"}
              className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-600 uppercase leading-[0.95] tracking-[-0.03em] text-mars-navy"
            />

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-mars-navy/70 md:text-lg">
                Three decades inside aerospace, automotive, and high-precision
                manufacturing shaped a conviction: compliance is the floor, not
                the ceiling. The organizations that win globally are the ones
                that turn standards into systems, and systems into advantage.
              </p>
            </Reveal>

            {/* Large pull quote */}
            <Reveal delay={0.3}>
              <blockquote className="mt-12 border-l-2 border-mars-red pl-6">
                <p className="font-display text-2xl font-500 leading-tight tracking-tight text-mars-navy md:text-3xl">
                  &ldquo;Quality is not a department.
                  <span className="block text-mars-navy/70">It&rsquo;s a mindset.&rdquo;</span>
                </p>
                <footer className="mt-4 font-mono-tech text-[0.62rem] uppercase tracking-[0.26em] text-mars-navy/50">
                  — Founder, Mars Sigma Solutions
                </footer>
              </blockquote>
            </Reveal>

            {/* Experience timeline */}
            <div className="mt-14">
              <p className="mb-6 font-mono-tech text-[0.6rem] uppercase tracking-[0.28em] text-mars-navy/40">
                / Experience line
              </p>
              <div className="relative">
                {/* Base line */}
                <div className="absolute left-0 top-2.5 h-px w-full bg-mars-navy/15" />
                {/* Progress line */}
                <motion.div
                  style={{ scaleX: lineProgress }}
                  className="absolute left-0 top-2.5 h-px w-full origin-left bg-mars-red"
                />
                <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                  {TIMELINE.map((t) => (
                    <div key={t.year}>
                      <div className="h-1.5 w-1.5 rounded-full bg-mars-red ring-4 ring-mars-soft-grey" />
                      <div className="mt-4 font-display text-lg font-600 text-mars-navy">
                        {t.year}
                      </div>
                      <div className="mt-1 text-xs leading-snug text-mars-navy/55">
                        {t.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
