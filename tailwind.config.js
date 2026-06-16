/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // All fonts are self-hosted via @fontsource under the SIL Open Font
        // License (free for commercial use). Hanken Grotesk / Manrope stand in
        // for the design's commercial Neue Montreal / Satoshi.
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        display: ["'Hanken Grotesk'", "Inter", "system-ui", "sans-serif"],
        satoshi: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#101010",
        "ink-soft": "#3c3c3c",
        brand: {
          DEFAULT: "#2eb86a",
          deep: "#012519",
          mint: "#15b57f",
          light: "#70d3b1",
        },
      },
    },
  },
  plugins: [],
};
