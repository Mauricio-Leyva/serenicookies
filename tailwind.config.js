/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cookie-brown': '#8B4513',
        'cookie-light': '#D2B48C',
        'cookie-dark': '#654321',
        'cookie-cream': '#FFF8DC',
        'cookie-accent': '#FF7F50'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}