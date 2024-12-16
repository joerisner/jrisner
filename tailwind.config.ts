import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,md}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        default: '#f1f5f9',
        muted: '#94a3b8',
        primary: '#8b5cf6',
        secondary: '#ffa28b',
        tertiary: '#12b7bb'
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        code: ['Fira Code', ...fontFamily.mono]
      },
      maxWidth: {
        article: '850px'
      }
    }
  }
} satisfies Config;
