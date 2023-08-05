/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/preline/dist/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkbrown: {
          500: '#32221E',
          'hover': '#433936'
        },
        blue: {
          500: '#0163AA',
          'hover': '#0083E1'
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
  plugins: [
    require('preline/plugin'),
  ],
}
