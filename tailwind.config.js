/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    'black': '#000000',
    'white': '#FFF',
    'gray1': '#d3d3d3',
    'gray2': '#4F4F4F',
    'gray3': '#828282',
    'gray5': '#E0E0E0',
    'gray6': '#F2F2F2',
    'iris/100': '#5D5FEF',
    'lightgray': '#F1F1F1',
    'bgservices': '#030717',
    'textservices': '#808080',
    'cardblue': '#171632',
    'cardwhite': '#F1F1F1',
    'cd-background': '#F3F3F7',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
        'dm-sans': ['DM Sans'],
      }
    },
  },
  plugins: [],
}

