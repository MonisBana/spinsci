/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/1": "10vh",
        "screen/9": "90vh",
      }),
    },
  },
  plugins: [],
};
