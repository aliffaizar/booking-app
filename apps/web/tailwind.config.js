const tailwindConfig = require('tailwind-config')

module.exports = {
  ...tailwindConfig,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'color(display-p3 0.925 0.984 0.996 / <alpha-value>)',
          100: 'color(display-p3 0.831 0.969 0.988 / <alpha-value>)',
          200: 'color(display-p3 0.647 0.933 0.973 / <alpha-value>)',
          300: 'color(display-p3 0.369 0.882 0.949 / <alpha-value>)',
          400: 'color(display-p3 0.071 0.812 0.91 / <alpha-value>)',
          500: 'color(display-p3 0.063 0.722 0.804 / <alpha-value>)',
          600: 'color(display-p3 0.055 0.647 0.722 / <alpha-value>)',
          700: 'color(display-p3 0.051 0.565 0.631 / <alpha-value>)',
          800: 'color(display-p3 0.043 0.478 0.537 / <alpha-value>)',
          900: 'color(display-p3 0.031 0.349 0.388 / <alpha-value>)',
          950: 'color(display-p3 0.024 0.247 0.278 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
