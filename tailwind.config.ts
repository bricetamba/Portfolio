import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1B2B4B", dark: "#0F1E35", mid: "#243459" },
        gold: { DEFAULT: "#C8922A", light: "#E0A840", pale: "#F5D98A" },
      },
    },
  },
  plugins: [],
};
export default config;
