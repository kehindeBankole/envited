/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(259, 74%, 20%, 1)",
        dark: "hsla(259, 74%, 20%, 1)",
        light: "hsla(0, 0%, 31%, 1)",
      },
    },
  },
  plugins: [],
};
