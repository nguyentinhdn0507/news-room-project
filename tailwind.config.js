/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "414px",
      },
    },
  },
  plugins: [],
};
