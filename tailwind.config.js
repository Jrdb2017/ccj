const {colors: defaultColors} = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brown:{
          light: '#f7f4f1',
          DEFAULT:'#DCCCC0',
          dark:'#c1a48f',
         }
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')],
}
