/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      //custom colors
      green: {
        DEFAULT: "#DAED49",
        dark: "#BDD800",
      },
      blue: "#00BDD4",
      gray: {
        light: "#D1D1D1",
        DEFAULT: "#959595",
        dark: "#707070",
      },
      dark: "#000000",
      white: {
        DEFAULT: "#FFFFFF",
        dark: "#CCCCCC",
      },
    },
    fontWeight: {
      //custom font weights
      thin: "200",
      light: "300",
      regular: "400",
      bold: "700",
      black: "900",
    },
    fontFamily: {
      //override default font
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
