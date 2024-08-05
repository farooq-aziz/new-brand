/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        'xs': { 'max': '576px' },
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        poppins: ["var(--font-secondary)"]
      },
      colors: {
        "primary": { 100: "#fba900" },
      }
    },
  },
  plugins: [],
}