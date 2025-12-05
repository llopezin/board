import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        presas: "url('/presas.png')",
      },
      plugins: [],

      colors: {
        deepTeal: "#0E4F60",
        vibrantOrange: "#FF6B35",
        mutedSand: "#EAD7C0",
        slateGray: "#4B5563",
        brightSkyBlue: "#57C4E5",
      },
    },
  },
  plugins: [],
} satisfies Config;
