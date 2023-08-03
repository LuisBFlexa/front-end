/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {borderWidth: {
    DEFAULT: '3px',
    '0': '0',
    '0.1':'0.1px',
    '2': '2px',
   '3': '3px',
    '4': '4px',
   '6': '6px',
   '8': '8px',
  },
    extend: {},
  },
  plugins: [],
}

