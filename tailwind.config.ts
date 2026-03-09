import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        accent: '#B45309',
        surface: '#FFFFFF',
        muted: '#57534E',
        subtle: '#A8A29E',
        'bg-warm': '#FAFAF9',
        'bg-dark': '#0F172A',
      },
      fontFamily: {
        serif: ['Libre Bodoni', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [forms, containerQueries],
} satisfies Config;
