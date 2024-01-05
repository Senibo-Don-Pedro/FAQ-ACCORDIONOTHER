/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      colors: {
        themeWhite: ['hsl(0, 0%, 100%)'],
        themePink: ['hsl(275, 100%, 97%)'],
        themeGrayPurple: ['hsl(292, 16%, 49%)'],
        themeDarkPurple: ['hsl(292, 42%, 14%)'],
      },
    },
  },
  plugins: [],
}
