import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/frontend/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
