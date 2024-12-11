/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      screens: {
        'media769':'769px',
        'media1025':'1025px',
      }
    },
    fontFamily: {
      Dancing:["Dancing Script", "sans-serif"],
    },
  },
  plugins: [],
}

