/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {opacity: 0, transform: 'translateY(50px)'},
          '100%': {opacity: 1},
        }
      },
      animation: {
        'fade-in-bottom': 'fade 0.5s linear'
      },
    },
  },
  plugins: [],
}
