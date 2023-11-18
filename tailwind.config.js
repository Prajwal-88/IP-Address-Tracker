/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Very_Dark_Gray: 'hsl(0, 0%, 17%)',
        Dark_Gray: 'hsl(0, 0%, 59%)',
      },
      fontFamily:{
        rub:"'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
}

