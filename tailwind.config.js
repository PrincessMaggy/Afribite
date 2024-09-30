/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'eggshell': '#fffcf2',
        'notif':'#fbf5e9',
        'notif-bord':'#f4e1c133',
        'accent': '#e2725b',
      },
      spacing: {
        '10px': '10px',
        '21px': '21px',
        '23px': '23px',
      },
    },
  },
  plugins: [],
};
