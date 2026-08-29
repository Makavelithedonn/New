/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bcare: {
          navy: '#146394',
          'navy-dark': '#0d4870',
          'navy-light': '#1e7ab0',
          orange: '#faa62e',
          'orange-dark': '#e8951a',
          'orange-light': '#fcbe5c',
          green: '#18754d',
          'green-light': '#1b8354',
          'green-dark': '#0f5e36',
          dark: '#1a1a19',
          gray: '#474747',
          'gray-light': '#f5f6fa',
          'gray-border': '#e6e9f0',
          'blue-accent': '#019cde',
          'teal-accent': '#029b90',
          cream: '#f8f8f7',
          'green-tint': '#e8f5f0',
          'blue-tint': '#e8f7fa',
          'navy-tint': '#f1f8f4',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        display: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      boxShadow: {
        'bcare': '0 4px 20px -2px rgba(20, 99, 148, 0.08)',
        'bcare-lg': '0 12px 40px -4px rgba(20, 99, 148, 0.12)',
        'bcare-xl': '0 24px 60px -12px rgba(15, 30, 50, 0.18)',
        'navy-glow': '0 8px 18px -6px rgba(26, 58, 92, 0.6)',
      },
    },
  },
  plugins: [],
};
