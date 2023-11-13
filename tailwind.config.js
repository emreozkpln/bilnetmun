/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': {
          100: "#191919",
          200: "#000000",
          300: "#113567",
          'white': "#E7FFFF",
          400: "#E4E9EF"
        },

      },
    },
  },
  plugins: [],
}

