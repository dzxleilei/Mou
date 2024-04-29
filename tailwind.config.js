/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown-mou': '#e2a748',
        'dark-brown-mou': '#984212'
      },

      backgroundImage: {
        'kulkas': "url('../img/kulkas.png')",
      },

      container: {
        padding: '5rem',
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
