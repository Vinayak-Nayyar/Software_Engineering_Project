/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          blue: '#2563EB',
          navy: '#0F172A',
          muted: '#64748B',
        },
      },
      boxShadow: {
        softblue: '0 24px 70px -24px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
};
