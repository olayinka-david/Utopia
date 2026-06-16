import { motion, type Variants } from "motion/react";

// Post-quantum themed loading screen.
// An octahedral lattice draws itself in, the probe core pulses, broadcast rings
// ripple outward, and a progress bar fills — then App fades the whole overlay out.

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.12, duration: 0.9, ease: "easeInOut" as const },
      opacity: { delay: i * 0.12, duration: 0.3 },
    },
  }),
};

const edges = [
  "M100 10 190 100",
  "M190 100 100 190",
  "M100 190 10 100",
  "M10 100 100 10",
  "M100 10 100 190",
  "M10 100 190 100",
];

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center stats-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="relative flex items-center justify-center">
        {/* Broadcast rings rippling outward from the core */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-brand-light/40"
            style={{ width: 200, height: 200 }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1.6, opacity: [0, 0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.55, ease: "easeOut" }}
          />
        ))}

        {/* Octahedral lattice that draws itself */}
        <motion.svg width="200" height="200" viewBox="0 0 200 200" fill="none" initial="hidden" animate="visible">
          <motion.path
            d="M100 10 190 100 100 190 10 100Z"
            stroke="#70d3b1"
            strokeWidth="1.5"
            fill="rgba(46,184,106,0.12)"
            variants={draw}
            custom={0}
          />
          {edges.map((d, i) => (
            <motion.path key={d} d={d} stroke="#2eb86a" strokeWidth="1.5" variants={draw} custom={i + 1} />
          ))}
          {/* Pulsing probe core */}
          <motion.circle
            cx="100"
            cy="100"
            r="7"
            fill="#70d3b1"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.25, 1] }}
            transition={{ delay: 1, duration: 1.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      <motion.p
        className="mt-10 font-mono text-[13px] uppercase tracking-[3px] text-brand-light"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Initializing QSP Probe
      </motion.p>

      {/* Progress bar */}
      <div className="mt-5 h-px w-[220px] overflow-hidden bg-white/15">
        <motion.div
          className="h-full bg-brand-light"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
