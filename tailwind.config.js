/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      background: '#24293E',
      text: '#F4F5FC',
      primary: '#8EBBFF',
    },
  },
  plugins: [],
};
