/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        very_dark_grey: "#20212c",
        dark_grey: "#2b2c37",
        lines_dark: "#3e3f4e",
        medium_grey: "#828fa3",
        lines_light: "#e4ebfa",
        light_grey: "#f2f4f5",
        white: "#ffffff",
        main_red: "#ea5555",
        red_hover: "ff9898",
        main_purple: "#635fc7",
        purple_hover: "#a8a4ff",
      },
    },
  },
  plugins: [],
};
