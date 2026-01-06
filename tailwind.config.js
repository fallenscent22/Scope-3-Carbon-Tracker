/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D4ED8',
        'header-bg': '#7DD3F2',
        'pricing-header': '#004085',
        'cta-green': '#00FF00',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}