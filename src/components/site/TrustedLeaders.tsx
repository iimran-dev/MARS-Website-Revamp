'use client'

import { Marquee } from "./primitives";

const LOGOS = [
  {
    name: "TATA",
    node: (
      <svg viewBox="0 0 110 36" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="TATA">
        <g transform="translate(0, 3)">
          <circle cx="15" cy="15" r="14" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M8.5 24 C8.5 13, 12 7, 15 7 C18 7, 21.5 13, 21.5 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M11 17 C13 12, 17 12, 19 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text x="38" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="19" letterSpacing="0.18em">TATA</text>
      </svg>
    ),
  },
  {
    name: "BOSCH",
    node: (
      <svg viewBox="0 0 120 34" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="BOSCH">
        <g transform="translate(2, 2)">
          <circle cx="15" cy="15" r="14" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <rect x="6" y="12" width="18" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
        <text x="38" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="0.08em">BOSCH</text>
      </svg>
    ),
  },
  {
    name: "AIRBUS",
    node: (
      <svg viewBox="0 0 125 30" fill="currentColor" className="h-6 sm:h-7 md:h-8 w-auto" aria-label="AIRBUS">
        <text x="0" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.18em">AIRBUS</text>
      </svg>
    ),
  },
  {
    name: "Mahindra",
    node: (
      <svg viewBox="0 0 130 32" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="Mahindra">
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-0.03em">Mahindra</text>
      </svg>
    ),
  },
  {
    name: "Schneider Electric",
    node: (
      <svg viewBox="0 0 145 36" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="Schneider Electric">
        <text x="0" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.02em">Schneider</text>
        <text x="24" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="11" letterSpacing="0.09em" opacity="0.85">Electric</text>
        <circle cx="74" cy="5" r="2.5" fill="#3FD0FF" />
      </svg>
    ),
  },
  {
    name: "SIEMENS",
    node: (
      <svg viewBox="0 0 125 30" fill="currentColor" className="h-6 sm:h-7 md:h-8 w-auto" aria-label="SIEMENS">
        <text x="0" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.09em">SIEMENS</text>
      </svg>
    ),
  },
  {
    name: "Honeywell",
    node: (
      <svg viewBox="0 0 138 32" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="Honeywell">
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.03em">Honeywell</text>
      </svg>
    ),
  },
  {
    name: "SAFRAN",
    node: (
      <svg viewBox="0 0 135 34" fill="currentColor" className="h-7 sm:h-8 md:h-9 w-auto" aria-label="SAFRAN">
        <g transform="translate(0, 3)">
          <path d="M5 18 C5 10, 13 8, 17 12 C20 17, 13 22, 16 26 C18 28, 22 27, 24 23" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <text x="34" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="19" letterSpacing="0.15em">SAFRAN</text>
      </svg>
    ),
  },
];

export function TrustedLeaders() {
  // Duplicate logos array so the marquee is densely populated and smoothly infinite across all screen sizes
  const displayLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="relative z-20 border-y border-white/10 bg-mars-navy-night py-10 sm:py-12 md:py-16 text-white overflow-hidden">
      {/* Subtle blueprint grid atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-15" aria-hidden />

      {/* Edge gradient masks for seamless visual fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-mars-navy-night to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-mars-navy-night to-transparent" />

      {/* Continuous Infinite Running Loop Marquee across all screen sizes */}
      <div className="relative z-10 w-full overflow-hidden">
        <Marquee speed={36} className="py-2">
          <div className="flex items-center gap-14 sm:gap-20 md:gap-24 lg:gap-28 pr-14 sm:pr-20 md:pr-24 lg:pr-28">
            {displayLogos.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex shrink-0 items-center text-white/70 transition-all duration-300 hover:text-white hover:opacity-100 hover:scale-105"
              >
                {item.node}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
