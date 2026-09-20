'use client'

export function SectionWave({
  color = "text-mars-navy-night",
  className = "",
  flip = false,
}: {
  color?: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`absolute top-0 inset-x-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-8 sm:h-12 md:h-14 ${color} block`}
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,0 L1440,0 L1440,20 C1120,54 820,10 460,38 C220,56 0,20 0,20 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
