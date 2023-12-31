/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        dhv: '100dvh',
      },
      colors: {
        primary: '#150E28',
        secondary: '#903AFF;',
        tertiary: '#D434FE;',
        'light-tertiary': 'rgba(217, 217, 217, 0.03)',
      },
      fontSize: {
        '4xl': ['32px', 'normal'],
      },
      maxWidth: {
        'primary-width': '535px',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
          'circular-gradient': 'linear-gradient(270deg, #903AFF 0%, #D434FE 100%)',

        'hover-gradient':
          'linear-gradient(270deg, #FE34B9 0%, #FF26B9 43.58%, #D434FE 86.61%, #903AFF 100%);',
      },
    },
  },
  plugins: [],
}
