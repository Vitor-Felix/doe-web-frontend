/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Customize as you want
        secondary: "#6366f1"
      },
    },
  },
  plugins: [],
};
