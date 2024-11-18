/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mythical': {
          purple: '#4a148c',
          teal: '#00796b',
          gold: '#ffd700',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      fontFamily: {
        'runes': ['RunicAlt', 'serif'],
      },
    },
  },
  plugins: [],
};