/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      "dark-purple": "#000D85",
      "light-white": "rgba(255,255,255,0.17)",
      "deep-white": "#989898",
    },
  },
  plugins: [],
};
