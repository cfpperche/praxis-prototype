/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e2',
          300: '#aeb6c6',
          400: '#828ea6',
          500: '#62708b',
          600: '#4d5972',
          700: '#3f485d',
          800: '#363d4f',
          900: '#0f1626',
          950: '#080d18'
        },
        accent: {
          50: '#f0fbf8',
          100: '#d6f4ea',
          200: '#aee8d5',
          300: '#78d5bb',
          400: '#46bb9d',
          500: '#2a9f84',
          600: '#1f806b',
          700: '#1c6657',
          800: '#1b5147',
          900: '#19443c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        narrow: '64rem'
      }
    }
  },
  plugins: []
};
