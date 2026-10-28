/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdfcef',
        ink: '#3a3a3a',
        accent: '#9b8cff',
        'accent-dark': '#b0a4ff',
      },
      fontFamily: {
        sans: ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        throb: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        pop: 'pop 0.18s ease',
        throb: 'throb 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
