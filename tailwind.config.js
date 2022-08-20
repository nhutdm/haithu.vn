/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        stack: {
          50: '#f4f5f4',
          100: '#e5e7e4',
          200: '#ccd0ca',
          300: '#959d93',
          400: '#80897e',
          500: '#616a5f',
          600: '#4a5249',
          700: '#3a423a',
          800: '#30362f',
          900: '#282c28',
        },
      },
      fontFamily: {
        sans: ['Oswald', ...defaultTheme.fontFamily.sans],
        serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
