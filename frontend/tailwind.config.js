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
        chart: {
          girdLine: '#4B4B4B',
          today: '#1A82FF',
          lastPrice: '#4C92CD',
          prevDay: '#F536F9',
          tooltip: '#363843',
          chip: '#3E4246',
          greenLine: '#2EB253',
          highLightText: '#509AD9',
          headerArea: '#3F53C6',
          priceLine: '#FFF3F3',
        },
      },
    },
  },
  plugins: [],
}
