/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cookie-brown': '#9370DB', // Púrpura medio para mejor contraste
        'cookie-light': '#FFD1DC', // Rosa pálido con mejor contraste
        'cookie-dark': '#8A2BE2', // Violeta más oscuro para texto con buen contraste
        'cookie-cream': '#FFF8DC', // Crema más contrastante
        'cookie-accent': '#FF69B4' // Rosa intenso para acentos
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