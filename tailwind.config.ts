import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8234E9",
          secondary: "#4AA3CE",
          tertiary: "#F75A68",
        },
        dark: {
          low: "#29292E",
          mid: "#121214",
          str: "#09090a",
        },
        new: {
          light: "#FFCD1E",
        },
        neutral: "#C4C4CC",
      },
    },
  },
  plugins: [],
}
export default config
