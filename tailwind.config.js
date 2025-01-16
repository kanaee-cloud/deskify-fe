/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Lexend'
    },
    extend: {
      colors: {
        accent: '#E3B951',
        primary: '#212529'
      },
      backgroundImage: {
        home: "url('/public/assets/home.png')"
      },
    },
  },
  plugins: [],
}

