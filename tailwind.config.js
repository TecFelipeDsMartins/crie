module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-patern': "url('/img/criefundo.png')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
