/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
  content: ["./public/index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#8AAAE5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
