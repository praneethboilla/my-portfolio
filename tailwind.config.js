/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        teal: "rgb(var(--color-teal) / <alpha-value>)",
        "teal-soft": "rgb(var(--color-teal-soft) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
