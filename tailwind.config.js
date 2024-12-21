/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is the most important line
    "./public/index.html"      // This is also important
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}