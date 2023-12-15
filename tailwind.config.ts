import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8234E9",
        },
        dark: {
          low: "#29292E",
          mid: "#1E1E1E",
          str: "#121214",
        },
        neutral: "#C4C4CC",
      },
    },
  },
  plugins: [],
}
export default config
