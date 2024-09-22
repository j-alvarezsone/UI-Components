/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'roboto-regular': ['Roboto Regular'],
      'roboto-medium': ['Roboto Medium'],
      'roboto-bold': ['Roboto Bold'], // Corrected key
      'geomanist-book': ['Geomanist Book'],
      'geomanist-regular': ['Geomanist Regular'],
    },
  },
  plugins: [],
}
