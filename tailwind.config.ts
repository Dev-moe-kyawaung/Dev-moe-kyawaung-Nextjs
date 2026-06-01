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
        // OKLCH-based color palette for Android developer portfolio
        background: "oklch(0.98 0.005 240)",
        foreground: "oklch(0.15 0.02 240)",
        primary: {
          DEFAULT: "oklch(0.65 0.22 120)", // Android green
          foreground: "oklch(0.98 0.005 240)",
          dark: "oklch(0.55 0.18 120)",
          light: "oklch(0.75 0.20 120)",
        },
        secondary: {
          DEFAULT: "oklch(0.70 0.15 260)", // Purple accent
          foreground: "oklch(0.98 0.005 240)",
          dark: "oklch(0.60 0.12 260)",
          light: "oklch(0.80 0.12 260)",
        },
        accent: {
          DEFAULT: "oklch(0.72 0.18 90)", // Lime accent
          foreground: "oklch(0.15 0.02 240)",
        },
        surface: {
          DEFAULT: "oklch(0.98 0.005 240)",
          elevated: "oklch(0.95 0.008 240)",
          overlay: "oklch(0.92 0.01 240)",
        },
        border: "oklch(0.85 0.015 240)",
        muted: {
          DEFAULT: "oklch(0.90 0.01 240)",
          foreground: "oklch(0.55 0.02 240)",
        },
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.15 0.02 240)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
