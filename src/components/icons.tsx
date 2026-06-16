// Hand-built inline SVG icons, recreated to match the Figma design.
// Vector (not raster) so they stay crisp at any size and need no network fetch.

type IconProps = { className?: string; size?: number };

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowDown({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

// Small horizontal connector between Environment A / PROBE / Environment B.
export function Connector({ className, size = 18 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={(size * 8) / 18}
      viewBox="0 0 18 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M0 4h16" />
      <path d="m13 1 4 3-4 3" />
    </svg>
  );
}

// Broadcast / "((•))" probe icon shown inside the QSP PROBE box.
export function ProbeIcon({ className, size = 30 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M6 6a9 9 0 0 0 0 12" />
      <path d="M18 6a9 9 0 0 1 0 12" />
    </svg>
  );
}

// Decorative isometric-blocks glyph used in the Phase 01 / 02 cards.
export function PhaseGlyph({ className, size = 100 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={(size * 90) / 100}
      viewBox="0 0 100 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 28 38 18l18 10-18 10z" />
      <path d="M20 28v20l18 10V38z" />
      <path d="M56 28v20L38 58V38z" opacity="0.5" />
      <path d="M52 52 70 42l18 10-18 10z" opacity="0.85" />
      <path d="M52 52v18l18 10V62z" opacity="0.85" />
      <path d="M88 52v18L70 80V62z" opacity="0.4" />
    </svg>
  );
}
