/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fff",
        lowWhite: "#FCFCFC",
        offWhite: "#F5F5F5",
        lightGrey: "#E4E4E4",
        mediumGrey: "#565656",
        darkGrey: "#3A4342",
        black: "#000",
        vibrantGreen: "#64E08E",
        darkGreen: "#007552",
        lightGreen: "#E6EAD5",
        transitionProperty: {
          width: "width",
        },
      },
    },
  },
  plugins: [],
}