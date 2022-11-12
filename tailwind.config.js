/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/[id].jsx',
    './pages/index.js',
    './components/user.jsx'
  ],
  theme: {
    screens: {
        'sm': '425px',
    },
  },
  plugins: [],
}
