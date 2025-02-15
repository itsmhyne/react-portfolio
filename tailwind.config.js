/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0DB760",
        secondary: "#FF0000",
        dark: "#FE8B75",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
