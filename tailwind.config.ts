import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      },
      colors: {
        night: "#05060d",
        ink: "#0a0d18",
        neon: {
          violet: "#8b5cf6",
          blue: "#4f8cff",
          cyan: "#22d3ee",
          pink: "#d946ef"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(139, 92, 246, 0.42)",
        cyan: "0 0 35px rgba(34, 211, 238, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
