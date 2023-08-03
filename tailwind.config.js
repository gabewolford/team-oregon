/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkbrown: {
          500: '#32221E',
          'hover': '#'
        },
        blue: {
          500: '#0163AA',
          'hover': '#'
        },
        lightblue: {
          500: '#CAD9E0'
        },
        white: {
          500: '#FFFFFF'
        },

      }
    },
  },
  plugins: [],
}
