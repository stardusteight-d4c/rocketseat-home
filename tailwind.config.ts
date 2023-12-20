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
          primary: "#A44CEC",
          secondary: "#4AA3CE",
          tertiary: "#F75A68",
        },
        dark: {
          low: "#29292E",
          mid: "#1E1E1E",
          str: "#121214",
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
