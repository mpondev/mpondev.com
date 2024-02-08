/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffd6cc',
          200: '#ffad99',
          300: '#ff8566',
          400: '#ff5c33',
          500: '#ff3300',
          600: '#cc2900',
          700: '#991f00',
          800: '#661400',
          900: '#330a00',
        },
      },
    },
  },
  plugins: [],
};
