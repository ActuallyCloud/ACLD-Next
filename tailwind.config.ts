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
        'fadein': 'appear 0.25s ease-out',
        'fadein-fast': 'appear 0.15s ease-out',
        'rotate': 'rotate 2s ease-out',
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(-0.25rem)" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { opacity: "0", transform: "rotate(-180deg)" },
          "100%": { opacity: "1" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
