/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",  "./pages/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'yellow': '#FED521',

      'gray': '#808080',
      'black': '#000',
      'whit': '#fff',
      'gray-border': '#d1d5db',
      'neut': {
        800: '#262626',
        900: '#171717',
      },
      'backgroundImage': 'rgba(0, 0, 0, 0.5)'
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.my-custom-class': {

        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

