/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: '#fafaf8',
        ink: '#0f0f0e',
        muted: '#7a7a74',
        hint: '#b8b8b2',
        border: '#e4e4de',
      },
    },
  },
  plugins: [],
}