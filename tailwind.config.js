/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qmath: {
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
          950: '#052e16',
          dark: '#064e3b',
          deep: '#032a1f'
        },
        brand: {
          primary: '#047857',
          hover: '#065f46',
          active: '#064e3b',
          light: '#ecfdf5',
          border: '#a7f3d0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -3px rgba(4, 120, 87, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'exam': '0 20px 40px -15px rgba(6, 78, 59, 0.15)'
      }
    },
  },
  plugins: [],
}
