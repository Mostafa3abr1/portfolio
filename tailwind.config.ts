import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        cyber: {
          black: "#030712",
          card: "#0a1124",
          cardHover: "#0e1730",
          border: "rgba(0, 242, 254, 0.2)",
          cyan: "#00f2fe",
          neon: "#00d2ff",
          blue: "#2563eb",
          glow: "rgba(0, 242, 254, 0.45)",
          accent: "#38bdf8",
        },
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 30s linear infinite",
        "pulse-glow": "pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
