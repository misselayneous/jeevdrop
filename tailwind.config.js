/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jeevred: "#990000",
        primary: "#292929",
        accent: "#B8ADA0",
        sand: "#EDE8E1",
        stone: "#615E59",
        smoke: "#F5F5F5",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
} 