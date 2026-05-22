/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'trixie-bg': '#F3F4F1',
        'trixie-black': '#111111',
        'trixie-olive': '#4A5240',
        'trixie-gold': '#D4AF37',
        'trixie-surface': '#FFFFFF',
        'trixie-border': '#E8E8E8',
      },
    },
  },
  plugins: [],
}
