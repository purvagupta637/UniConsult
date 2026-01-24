/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1f3b73',
        secondary: '#12b795',
        accent: '#f59e0b',
        ink: '#0f172a',
        muted: '#334155',
        surface: '#0b1221',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 80px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
}

