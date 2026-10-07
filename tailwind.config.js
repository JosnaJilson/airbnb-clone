/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          DEFAULT: '#FF385C',
          rausch: '#FF385C',
          dark: '#E00B41',
          light: '#FFF8F6',
          hover: '#D70466',
        },
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F7F7F7',
          card: '#FFFFFF',
          dark: '#141312'
        },
        stone: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#EBEBEB',
          300: '#DDDDDD',
          400: '#B0B0B0',
          500: '#717171',
          600: '#5E5E5E',
          700: '#484848',
          800: '#222222',
          900: '#141414',
        },
        charcoal: {
          DEFAULT: '#222222',
          deep: '#111111',
          soft: '#262422',
          muted: '#717171',
          light: '#918B83',
        },
        terracotta: {
          50: '#FFF5F5',
          100: '#FFEAEA',
          200: '#FFD4D7',
          300: '#FFAFB5',
          400: '#FF7D8A',
          500: '#FF385C',
          600: '#E00B41',
          700: '#C10034',
          800: '#A0032E',
          900: '#840A2B',
        },
        cypress: {
          50: '#F2F7F4',
          100: '#E1ECE6',
          200: '#C3DAD0',
          300: '#9BC0B2',
          400: '#6E9F8E',
          500: '#487D6C',
          600: '#346355',
          700: '#2A4E43',
          800: '#233F37',
          900: '#1D342E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.06)',
        'soft': '0 6px 20px -4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 14px 34px -6px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 24px 50px -10px rgba(0, 0, 0, 0.16)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
