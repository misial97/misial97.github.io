import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#f8fafc',
        muted: '#94a3b8',
        accent: '#60a5fa',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.25), 0 20px 70px rgba(96, 165, 250, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
