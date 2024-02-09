/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '32rem',
      },
      colors: {
        pro: {
          100: '#5CD6B6',
          200: '#151515',
          300: '#1C3531'
        },
      },

      fontFamily: {
        Cascadia: ["Cascadia", "sans-serif"],
      },
    },
  },
  plugins: [],
}