import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1120",    // Deep Navy — global bg
          surface: "#1E293B", // Surface Navy — cards/panels
          blue: "#55a4ff",    // Light Cyber Blue — accents/hover
          light: "#F8FAFC",   // Light foreground text
          slate: "#0F172A",   // Dark foreground text (light sections)
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        exo2: ["var(--font-exo2)", "system-ui", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "system-ui", "sans-serif"],
      },
      animation: {
        aurora: "aurora-shift 60s linear infinite",
        marquee: "marquee-slide var(--duration, 30s) linear infinite",
        "stars-1": "stars-scroll 50s linear infinite",
        "stars-2": "stars-scroll 100s linear infinite",
        "stars-3": "stars-scroll 150s linear infinite",
      },
      keyframes: {
        "aurora-shift": {
          from: { backgroundPosition: "50% 50%" },
          to: { backgroundPosition: "350% 50%" },
        },
        "marquee-slide": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "stars-scroll": {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(-2000px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
