// ESM is not yet supported for this file by Tailwind.
//  Reference: https://github.com/tailwindlabs/tailwindcss/discussions/2284
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...fontFamily.sans],
      },
      textColor: {
        'accent-purple': '#a16ae8',
        primary: '#d4d4d4',
      },
    },
  },
};
