/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1':'#181720',
        'color2':'#22212A',
        'color3':'#E46137',
        // 'color3':'#583EBC',
        'color4':'#4C4B4F',
        'color5':'#3E3D4B',
      }
    },
  },
  plugins: [],
}

