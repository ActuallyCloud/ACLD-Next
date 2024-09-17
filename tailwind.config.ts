import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fadein': 'appear_down 0.4s ease-out',
        'fadein-fast': 'appear_down 0.20s ease-out',
        'fadeout': 'disappear 0.20s ease-in',
        'rotate': 'rotate 2s ease-out',
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        appear_down: {
          "0%": { opacity: "0", transform: "translateY(-0.25rem)" },
          "100%": { opacity: "1" },
        },
        disappear: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        disappear_down: {
          "0%": { opacity: "0", transform: "translateY(-0.25rem)" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { opacity: "0", transform: "rotate(-180deg)" },
          "100%": { opacity: "1" },
        },
      }
    },
  },
  plugins: [],
};

export default config;
