'use client'


import { motion, useTransform, type MotionValue } from "framer-motion";
import { MagneticButton, MagneticArrow, StatusDot } from "./primitives";
import { useScrollProgress } from "./primitives/useScrollProgress";
import { IMAGES } from "./images";

export function Hero() {
  const [ref, scrollYProgress] = useScrollProgress<HTMLElement>("hero");

  const yImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scaleImg: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-mars-navy-night grain-overlay"
    >
      {/* Background image layer */}
      <motion.div
        style={{ y: yImg, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* Neutral contrast overlay for typography legibility without blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container-mars relative z-30 flex min-h-[100svh] flex-col justify-center pt-28 pb-20"
      >
        <div className="max-w-4xl">

          {/* Headline */}
          <h1 className="mt-8 font-display text-[clamp(2.7rem,8.5vw,7.5rem)] font-600 uppercase leading-[0.92] tracking-[-0.03em] text-white">
            {["Building", "High-Performance", "Organizations"].map((line, i) => (
              <span key={line} className="reveal-mask">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.55 + i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 1 ? (
                    <span className="relative inline-block">
                      <span className="text-mars-red">High-Performance</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 h-px bg-mars-red/60"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            Quality Systems. Global Certifications. Operational Excellence.
            <span className="block text-white/45">A stronger tomorrow, engineered today.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#cta" variant="primary">
              Book a Strategy Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
            <MagneticArrow href="#constellation">Explore Our Expertise</MagneticArrow>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
