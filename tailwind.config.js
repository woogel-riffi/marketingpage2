/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD1DC',
          blue: '#B5E5CF',
          purple: '#E6D5F7',
          yellow: '#FFF9C4',
          green: '#C8E6C9',
          orange: '#FFE0B2',
        },
      },
    },
  },
  plugins: [],
}
