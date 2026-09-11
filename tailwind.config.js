/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1714",
        ivory: "#FAF6F1",
        rosegold: "#C99B7A",
        terracotta: "#B5654A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
}
