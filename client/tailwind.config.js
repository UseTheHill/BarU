// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public.index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
      extend: {
        gridTemplateRows: {
          // Simple 8 row grid
          8: "repeat(8, minmax(0, 1fr))",

          // Complex site-specific row configuration
          layout: "200px minmax(900px, 1fr) 100px",
        },
        gridTemplateRows: {
          // Simple 8 row grid
          8: "repeat(8, minmax(0, 1fr))",

          // Complex site-specific row configuration
          layout: "200px minmax(900px, 1fr) 100px",
        },
        colors: {
          barYellow: {
            DEFAULT: "#FFF7C7",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#FFFEFA",
            500: "#FFF7C7",
            600: "#FFF094",
            700: "#FFE861",
            800: "#FFE12E",
            900: "#FAD600",
          },
          barBlue: {
            DEFAULT: "#A6ECFF",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#D9F7FF",
            500: "#A6ECFF",
            600: "#73E1FF",
            700: "#40D6FF",
            800: "#0DCBFF",
            900: "#00ABD9",
          },
          barPink: {
            DEFAULT: "#FF9D9D",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#FFD0D0",
            500: "#FF9D9D",
            600: "#FF6A6A",
            700: "#FF3737",
            800: "#FF0404",
            900: "#D00000",
          },
          barGreen: {
            DEFAULT: "#A6FFBF",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#D9FFE4",
            500: "#A6FFBF",
            600: "#73FF9A",
            700: "#40FF76",
            800: "#0DFF51",
            900: "#00D93D",
          },
          barPurple: {
            DEFAULT: "#B6ADFF",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#E3E0FF",
            500: "#B6ADFF",
            600: "#897AFF",
            700: "#5B47FF",
            800: "#2E14FF",
            900: "#1900E0",
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

