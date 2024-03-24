/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "",
        "lighter-white": "",
        "light-gray": "#EBEBEB",
      },
      fontFamily: {
        montserrat: "Montserrat",
        montserratAlter: "Montserrat Alternates",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
