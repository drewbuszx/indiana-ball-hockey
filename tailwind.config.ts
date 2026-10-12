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
        // Brand navy from IBHA Brand Colors (#001D48)
        navy: {
          DEFAULT: "#001d48",
          soft: "#0a2a5c",
          deep: "#00102c",
        },
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
          DEFAULT: "#000d24",
          surface: "#001d48",
          elevated: "#0a2a5c",
          border: "#1a3a6a",
        },
        // Brand orange from IBHA Brand Colors (#FF6A1F)
        gold: {
          DEFAULT: "#ff6a1f",
          light: "#ff8533",
          muted: "#c24f12",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "rink-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,29,72,0.55), transparent)",
        "arena-lights":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,106,31,0.1), transparent 70%)",
        "gold-sheen":
          "linear-gradient(135deg, rgba(255,106,31,0.16) 0%, transparent 50%, rgba(13,110,196,0.1) 100%)",
      },
      spacing: {
        "18": "4.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "scroll-cue": "scrollCue 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
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
        scrollCue: {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
