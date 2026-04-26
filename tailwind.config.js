/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        konoha: {
          dark: '#121212',
          light: '#1e1e1e',
          orange: '#ff7b00',
          red: '#c41e3a',
          scroll: '#f5e6d3',
          muted: '#a0a0a0',
        }
      },
      fontFamily: {
        main: ['"Plus Jakarta Sans"', 'sans-serif'],
        accent: ['"Shippori Mincho"', 'serif'],
      }
    },
  },
  plugins: [],
}
