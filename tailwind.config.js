/** @type {import('tailwindcss').Config} */
import { colorPalette } from './src/utils/colorPalette'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colorPalette,
      },
    },
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
