/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        gold: '#D4AF37',
        ivory: '#F4ECD8',
        fog: '#E0E0E0',
        'rose-gold': '#B76E79',
        ash: '#1A1A1A',
        slate: '#333333',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
