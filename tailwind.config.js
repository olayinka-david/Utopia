/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Inter / JetBrains Mono are self-hosted via @fontsource.
        // Neue Montreal & Satoshi are commercial; closest free self-hosted
        // matches are used (Hanken Grotesk / Manrope). If you have the licensed
        // font files, add them and put their names first in these stacks.
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        display: ["'Neue Montreal'", "'Hanken Grotesk'", "Inter", "system-ui", "sans-serif"],
        satoshi: ["Satoshi", "Manrope", "Inter", "system-ui", "sans-serif"],
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
