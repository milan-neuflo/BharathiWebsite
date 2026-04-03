/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#091426',
        gold: '#fed400',
        'gold-dark': '#6f5c00',
        'light-bg': '#f9f9ff',
        'blue-bg': '#f0f3ff',
        'blue-light': '#dee8ff',
        'blue-border': '#d8e3fb',
        'text-secondary': '#45474c',
        'text-muted': '#8590a6',
      },
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1536px',
      },
    },
  },
  plugins: [],
};
