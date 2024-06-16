import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          400: "#3460f1",
          500: "#1e4ff2",
          600: "#1548f0",
          700: "#0841fb",
        },
        secondary: "#7b68f2"
      },
      background: {
        primary: "#1e4ff2",
        secondary: "#e0d8fc"
      },
    },
  },
  plugins: [],
};
export default config;
