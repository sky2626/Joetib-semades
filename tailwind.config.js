/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pro: {
          100: '#5CD6B6',
          200: '#151515',
        },
      },

      fontFamily: {
        Cascadia: ["Cascadia", "sans-serif"],
      },
    },
  },
  plugins: [],
}