/** @type {import('tailwindcss').Config} */
import { colorPalette } from './src/utils/colorPalette'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colorPalette,
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.125rem',
        15: '3.75rem',

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
