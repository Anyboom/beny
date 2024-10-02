/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          darken: "#111111",
        },
        gray: {
          DEFAULT: "#F6F6F6",
          darken: "#EBEBEB",
        },
      },
    },
  },
  darkMode: "false",
  plugins: [require("tailwindcss-primeui")],
};
