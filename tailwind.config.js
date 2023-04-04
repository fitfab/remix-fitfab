/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'sans':["mona-sans", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: {
        900: "#141414",
        800: "#8D8D8D",
        700: "#D9D9D9",
        600: "#e7e7e7",
        500: "#A5A5A5",
      },
      black: "#000",
      white: {
        300: "#cfcfcf",
        200: "#F5F5F5",
        100: "#fff",
      },
      brand: "#F51717",
      accent: "#219ebc",
      blue: "#00549D",
      blueDeep: "#31353d",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "& > *");
    }),
    require("daisyui")
  ],
};
