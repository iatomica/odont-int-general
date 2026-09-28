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
        background: "#f8fafc",
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f1f5f9",
          muted: "#e2e8f0",
        },
        charcoal: {
          DEFAULT: "#0f172a",
          secondary: "#334155",
          muted: "#64748b",
          light: "#94a3b8",
        },
        petrol: {
          50: "#f0f7f8",
          100: "#dbeef1",
          200: "#b8dde3",
          300: "#86c2cd",
          400: "#4ea1b2",
          500: "#2d7f91",
          600: "#1a6373",
          700: "#0f4c5c", // Primary brand accent
          800: "#0c3b47",
          900: "#092d37",
          950: "#041920",
        },
      },
      borderRadius: {
        container: "16px",
        card: "14px",
        input: "12px",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(15, 23, 42, 0.04), 0 1px 4px -1px rgba(15, 23, 42, 0.02)",
        elevated: "0 10px 25px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03)",
        modal: "0 20px 40px -10px rgba(15, 23, 42, 0.16), 0 1px 3px 0 rgba(15, 23, 42, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
