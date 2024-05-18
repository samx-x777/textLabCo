/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'fontx1': 'Environment',
        'fontx2': 'Bohme'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
