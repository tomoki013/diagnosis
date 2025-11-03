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
        "brand-primary": "#6A11CB",
        "brand-secondary": "#2575FC",
        "brand-accent": "#E94057",
        "dark-bg": "#121212",
        "dark-card": "#1E1E1E",
        "dark-text": "#E0E0E0",
        "dark-text-secondary": "#A0A0A0",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px -5px #6A11CB" },
          "50%": { boxShadow: "0 0 15px 5px #6A11CB" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
