import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['"Google Sans"', '"Google Sans Flex"', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        // Dark theme (Chat app)
        'gemini-dark': {
          bg: '#000000',
          'input-bg': '#1e1f20',
          'chip-bg': '#0e0e0e',
          'text-primary': '#e3e3e3',
          'text-secondary': '#c4c7c5',
        },
        // Light theme (Pricing page)
        'gemini-light': {
          bg: '#ffffff',
          'text-primary': '#000000',
          'text-secondary': '#666666',
        },
      },
      borderRadius: {
        'input': '32px',
        'chip': '9999px',
        'badge': '8px',
        'cta': '48px',
      },
    },
  },
  plugins: [],
}
export default config
