/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        jet: {
          DEFAULT: '#111111',
          light: '#1E1E1E',
          dark: '#0A0A0A',
        },
        brand: {
          DEFAULT: '#E87722',
          light: '#F0921F',
          dark: '#C45F0E',
        },
        offwhite: '#F5F5F5',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
