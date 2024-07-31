/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'colors': {
        'aniflix': '#c62d44',
        'bg-aniflix': '#141519',
        'bg-aniflix-2': '#0E1A22',
        'bg-aniflix-semi': '#15202B'
      },
      'fontFamily': {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

