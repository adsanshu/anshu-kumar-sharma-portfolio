/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0b132b',
          900: '#070b19',
          950: '#03050d',
        },
        brand: {
          blue: '#2563eb',
          cyan: '#06b6d4',
          dark: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}

