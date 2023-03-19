const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        md: '1rem',
        base: '0.875rem',
        xs: '0.813rem',
        xxs: '0.625rem',
      },
      colors: {
        ...colors,
        white: '#FFFFFF',
        black600: '#2E2E2E',
        black500: '#2E2E2E',
        gray400: '#777777',
        textColor: '#414141',
        yellow300: '#FFCC21',
        orange400: '#FF963C',
        orange500: '#EA6C00',
        aqua300: '#8FE9D0',
        borderColor: '#707070',
        borderLine: '#2E2E2E',
      },
    },
  },
  plugins: [],
}
