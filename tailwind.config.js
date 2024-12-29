/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandColor': '#0D47A1',
        'secendary' : '#FF5722',
        'highLight' : '#CDDC39'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    fontFamily: {
      'monster' : ["Montserrat", "serif"],
      'roboto'  : ["Roboto", "serif"],
      'tail'    : ["Yellowtail", "serif"],
    },
  },
  plugins: [],
}