// ESM is not yet supported for this file by Tailwind.
//  Reference: https://github.com/tailwindlabs/tailwindcss/discussions/2284
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        default: '#f1f5f9',
        muted: '#94a3b8',
        primary: '#8b5cf6',
        secondary: '#ffa28b',
        tertiary: '#12b7bb',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      maxWidth: {
        blog: '850px',
      },
    },
  },
};
