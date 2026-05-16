import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b8c5e",
        "background-dark": "#0d0d0d",
        "background-light": "#ffffff",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
};

export default config;