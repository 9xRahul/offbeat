/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offbeat: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          dark: '#0f172a',
          earth: '#78350f',
          amber: '#f59e0b',
          sunset: '#f97316'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(0, 0, 0, 0.08), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'lifted': '0 10px 30px -5px rgba(22, 163, 74, 0.15)',
        'card': '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}
