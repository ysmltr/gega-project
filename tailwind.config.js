/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
      },
      colors:{
        'gega-red':'#EA4335',
        'gega-melon': '#FFD369',
        'gega-grey' : '#DDDDDD',
        'gega-white' : '#F7F7F7'
      }
    },
  },
  plugins: [],
}

