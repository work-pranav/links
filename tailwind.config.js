/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-purple-short": '0 0.25rem 0 0 #a369f4',
        "custom-purple": '0 0.3rem 0 0 #a369f4',
      }
    },
  },
  plugins: [],
}

