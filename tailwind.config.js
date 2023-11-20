/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'base': '1rem',     // 16px
      'sub': '1.618rem',   // 18px
      'head': '2.618rem',    // 20px
      'sm-base': '0.889rem',
      'sm-sub': '1rem',
      'sm-head': '1.125rem'
    }
    ,
    extend: {
      fontFamily: {
        custom: ['Questrial', 'sans- serif'],
        custom2: ['Varela', 'sans-serif']
      }
    },
  },
  plugins: [],
}