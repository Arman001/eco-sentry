import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"], // body
        montserrat: ["Montserrat", "sans-serif"], //headings
        oswald: ["Oswald", "sans-serif"],//accents
      },
    },
  },
  plugins: [
    createThemes({
      earthenElegance: {
        primary: "#2E7D32", //Forst Green
        secondary1: "#2196F3", // Technology Blue
        neutral1: "#FFFFFF", //White
        secondary2: "#4CAF50", //Leaf Green
        neutral2: "#ECEFF1", //Leaf Green
        accent: "#795548 ",//Earthen Brown
      },
    }),
  ],
};
export default config;
