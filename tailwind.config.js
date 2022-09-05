/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple:"#764AF1",
        second:"#9772FB",
        third:"#F2F2F2",
        fourth:"#F32424"
      }
    },
  },
  plugins: [],
}