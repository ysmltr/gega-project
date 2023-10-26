/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

