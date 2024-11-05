/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary': '#337F89',
      'secondary': '#009688',
      'white': '#F0F0F0',
      'gray': '#4E4E4E',
      'primary-darker': '#205E62',
      'gray-light': '#D9D9D9',
      'pure-white': '#FFFFFF',
      'red': '#BC585A',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}