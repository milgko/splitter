/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'andale-mono': ['Andale Mono', 'monospace']
    },
    fontWeight: {
      'extra-light': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extra-bold': 800,
      'black': 900,
    },
  },
  plugins: [],
}

