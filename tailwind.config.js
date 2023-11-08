/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins','sans-serif'],
        sail: ['Sail','sans-serif'],
        notosanmyanmar: ['Noto Sans Myanmar','sans-serif']
      },
      colors: {
        'primary-green': '#0C4A4A',
        'secondary-green': '#157373',
        'secondary-white': '#F6F6F6'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
