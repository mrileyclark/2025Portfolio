/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4e342e',
          200: '#413730',
          300: '#161616',
       },  
        secondary: '#7b675b',
        info:'#6b21a8',
        success: '#166534',
    },
      fontFamily: {
        page: ['"Fauna One", serif'],
        heading: ['"Cinzel", serif'],
      },
      backgroundImage: {
        'banner': "url('../images/medieval-workbench2.jpg')",
      },
    },
  },
  plugins: [],
}
