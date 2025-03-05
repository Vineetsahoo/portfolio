/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ffd7b5',
          medium: '#ffb38a',
          DEFAULT: '#ff9248',
          dark: '#ff6700',
        },
        primary: {
          light: '#ff6700',
          dark: '#ff8533',
        },
        secondary: {
          light: '#ffd7b5',
          dark: '#cc5500',
        }
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
};