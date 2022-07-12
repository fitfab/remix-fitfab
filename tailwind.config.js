/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: {
        900: "#464646",
        500: "#777777",
      },
      red: "#ca1001",
      blue: "#0064ad",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
