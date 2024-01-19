/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        opne: ["Open Sans", "sans-serif"],
      },
    },

    colors: {
      "gega-red": "#BC1A45",
      "gega-melon": "#FFD369",
      "gega-gray": "#DDDDDD",
      "gega-white": "#F7F7F7",
    },
  },
  plugins: [],
};
