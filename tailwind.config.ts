import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        border: "#e2e8f0",
        input: "#ffffff",
        ring: {
          DEFAULT: "#a3a58e",
          error: "#ff5151",
        },
        background: "#ffffff",
        foreground: "#4f533c",
        primary: {
          DEFAULT: "#a3a58e",
          foreground: "#ffffff",
          0: "#4f533c",
          1: "#a3a58e",
          2: "#f1f2da",
        },
        secondary: {
          DEFAULT: "#bc7769",
          foreground: "#ffffff",
          0: "#bc7769",
          1: "#e4bcb0",
          2: "#fdebe9",
        },
        destructive: {
          DEFAULT: "#ff5151",
          foreground: "#ffffff",
          1: "#ffdada",
        },
        muted: {
          DEFAULT: "#d3d3d3",
          foreground: "#949494",
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#020817",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#020817",
        },
        neutral: {
          DEFAULT: "#1D1D1D",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#276600",
          1: "#D4FFBA",
        },
        error: {
          DEFAULT: "#FF5151",
          1: "#FFDADA",
        },
      },
      gridTemplateColumns: {
        wrapDefault: "repeat(auto-fill,minmax(8rem,1fr))",
        wrapLarge: "repeat(auto-fill,minmax(12.5rem,1fr))",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
