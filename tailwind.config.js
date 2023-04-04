/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'sans':["mona-sans", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fitfab: {
          "primary": "#C9302F",
          "secondary": "#EEEEEE",
          "accent": "#0891b2",
          "neutral": "#4B5768",
          "base-100": "#ffffff",
          "info": "#bae6fd",
          "success": "#86efac",
          "warning": "#fde68a",
          "error": "#fecaca",
        },
      }
    ]
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "& > *");
    }),
    require("daisyui")
  ],
};
