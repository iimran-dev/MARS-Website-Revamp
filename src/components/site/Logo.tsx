'use client'

import { cn } from "@/lib/utils";

/* Mars Sigma brand mark — an orbital ring with a precision "Σ" sigma
   inscribed, evoking Mars (planet/orbit) + mathematical systems engineering. */
export function MarsSigmaMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Outer orbital ring */}
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9.5"
        transform="rotate(-28 24 24)"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      {/* Inner orbit node */}
      <circle cx="42.5" cy="13" r="2" fill="#E11D2A" />
      {/* Core hex ring */}
      <path
        d="M24 5.5 L38 13.5 L38 34.5 L24 42.5 L10 34.5 L10 13.5 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      {/* Sigma glyph */}
      <path
        d="M18 16 H30 L20.5 24 H29 L18 32 H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MarsSigmaWordmark({
  className,
  showMark = true,
  size = 36,
}: {
  className?: string;
  showMark?: boolean;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showMark && <MarsSigmaMark size={size} className="text-white" />}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-600 tracking-[0.04em] uppercase text-white">
          Mars Sigma
        </span>
        <span className="font-mono-tech text-[0.5rem] tracking-[0.4em] uppercase text-white/45">
          Solutions
        </span>
      </span>
    </span>
  );
}
