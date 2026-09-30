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
        background: "#FAF8F5",
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#F4EFE6",
          muted: "#E8E2D5",
        },
        charcoal: {
          DEFAULT: "#2B2621",
          secondary: "#4A433C",
          muted: "#766C62",
          light: "#A4998E",
        },
        // Premium Taupe & Warm Bronze palette matching JO DENTAL visual identity
        petrol: {
          50: "#FAF8F5",
          100: "#F4EFE6",
          200: "#E6DDCF",
          300: "#D3C5B1",
          400: "#B8A790",
          500: "#8F7D67",
          600: "#70614F",
          700: "#5C5144", // Primary brand logo tone
          800: "#483E33",
          900: "#342C24",
          950: "#1F1A15",
        },
        gold: {
          400: "#D6BF8F",
          500: "#C5AA7A",
          600: "#B29562",
        }
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
        soft: "0 2px 10px -2px rgba(43, 38, 33, 0.04), 0 1px 4px -1px rgba(43, 38, 33, 0.02)",
        elevated: "0 10px 25px -4px rgba(43, 38, 33, 0.07), 0 4px 10px -2px rgba(43, 38, 33, 0.03)",
        modal: "0 20px 40px -10px rgba(43, 38, 33, 0.18), 0 1px 3px 0 rgba(43, 38, 33, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
