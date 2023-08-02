/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,tsx,jsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  colors: {
    ...colors,
    dark: {
      900: "#000000",
      700: "#181818",
    },
    primary: {
      900: "#1d9bf0",
    },
    gray: {
      ...colors.gray,
      default: "rgb(113, 118, 123)",
    },
  },
};
export const plugins = [];
