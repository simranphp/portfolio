module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00F5A0',
        'bg-dark': '#0b0c0f',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        pop: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
