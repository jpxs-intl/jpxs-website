/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      screens: {
        "3xl": "1886px",
      },
    },
    colors: {
      black: "#000000",
      orange: "#7C3612",
      bg: "#171717",
      white: "#FFFFFF",
      lightorange: "#FF7709",
    },
  },
  plugins: [],
};
