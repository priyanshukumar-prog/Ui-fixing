/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Burger Singh Design System Colors
        'bs-red': {
          50: '#FDE8E9',
          100: '#FAC8CC',
          200: '#F6A5AC',
          500: '#DC2026',
          700: '#A01119',
          900: '#5C0B0D',
        },
        'bs-orange': {
          50: '#FFF4E6',
          100: '#FFE4CC',
          200: '#FFD4B3',
          500: '#FF8C00',
          700: '#CC7000',
          900: '#663800',
        },
        'bs-gold': {
          50: '#FFF8E1',
          100: '#FFEB99',
          500: '#FFB81C',
          700: '#CC9216',
        },
        'bs-gray': {
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        'bs-white': '#FFFFFF',
        'bs-success': '#4CAF50',
        'bs-warning': '#FF9800',
        'bs-error': '#F44336',
        'bs-info': '#2196F3',

        // Legacy colors (for gradients compatibility)
        saffron: {
          50: '#fff4ed',
          100: '#ffe6d5',
          400: '#ff9a5c',
          500: '#FF6B35',
          600: '#e85a2a',
          700: '#c44820',
        },
        chili: {
          500: '#C41E3A',
          600: '#a81930',
        },
        turmeric: {
          400: '#FFD040',
          500: '#FFB800',
          600: '#e6a600',
        },
        charcoal: {
          800: '#1A1A2E',
          900: '#0f0f1a',
        },
        cream: '#FFF8F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        // Design system spacing tokens (4px base)
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      borderRadius: {
        // Design system radius
        'xs': '4px',
        'sm': '8px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      fontSize: {
        // Design system type scale (11px - 32px)
        'xs': '11px',
        'sm': '12px',
        'base': '13px',
        'md': '15px',
        'lg': '17px',
        'xl': '19px',
        '2xl': '21px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '32px',
      },
      boxShadow: {
        // Design system shadows
        'xs': '0px 2px 4px rgba(0, 0, 0, 0.06)',
        'sm': '0px 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0px 4px 12px rgba(0, 0, 0, 0.12)',
        'lg': '0px 8px 24px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
      },
      keyframes: {
        slideUp: { from: { transform: 'translateY(20px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        bounceIn: { '0%': { transform: 'scale(0.8)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },
        pulseRing: { '0%': { opacity: 1 }, '50%': { opacity: 0.6 }, '100%': { opacity: 1 } },
      },
    },
  },
  plugins: [],
};

