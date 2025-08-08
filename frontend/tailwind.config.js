/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tamil': ['Noto Sans Tamil', 'Latha', 'Tamil Sangam MN', 'Arial Unicode MS', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 