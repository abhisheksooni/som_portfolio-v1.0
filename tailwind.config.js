/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1':'#FBF2E9',
        'color2':'#A88A64',
        'color3':'#0C1429',
        'color4':'#E8E1D9',
        'color5':'#E2D0B6',
        'color6':'#242A40',
      }
    },
  },
  plugins: [],
}

