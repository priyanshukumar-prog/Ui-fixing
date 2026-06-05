/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)',
      },
      keyframes: {
        slideUp: { from: { transform: 'translateY(20px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        bounceIn: { '0%': { transform: 'scale(0.8)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },
      },
    },
  },
  plugins: [],
};

