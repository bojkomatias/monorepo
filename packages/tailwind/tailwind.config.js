module.exports = {
  darkMode: ["media", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font)']
      // },
      colors: {
        // https://uicolors.app/
        // Can choose the name you want, 'brand' is a suggestion
        'brand': {
          '50': '#eefbf5',
          '100': '#d6f5e6',
          '200': '#b1e9d1',
          '300': '#7ed7b7',
          '400': '#49be97',
          '500': '#27a27d',
          '600': '#1b9170',
          '700': '#136953',
          '800': '#125343',
          '900': '#104438',
          '950': '#082620',
        },
      },
    },
  },
  plugins: [],
}

