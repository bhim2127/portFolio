/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite', // Custom slow bounce
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px'
      }
    },
  },
  plugins: [],
}