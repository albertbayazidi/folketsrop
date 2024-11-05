/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // Add dark mode selector
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Liberation Sans"', 'sans-serif'], // Use "Liberation Sans" as a sans-serif font
        serif: ['"Liberation Serif"', 'serif'],     // For serif variant
        mono: ['"Liberation Mono"', 'monospace'],   // For monospaced variant
       },
      spacing: {

      }
    },
  },
  plugins: [],
}
