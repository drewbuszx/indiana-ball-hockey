import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rink: {
          50: "#e8f4ff",
          100: "#c5e4ff",
          200: "#8ecaff",
          300: "#4da8f5",
          400: "#1a8ae8",
          500: "#0d6ec4",
          600: "#0a569e",
          700: "#0c457f",
          800: "#103a69",
          900: "#122f56",
        },
        arena: {
          DEFAULT: "#0a0e17",
          surface: "#111827",
          elevated: "#1a2234",
          border: "#2a3548",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e8c547",
          muted: "#8a7120",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "rink-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(13,110,196,0.35), transparent)",
        "arena-lights":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,162,39,0.08), transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
