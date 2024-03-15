/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Existing configuration
    "./app/screens/**/*.{js,jsx,ts,tsx}", // Include screens subfolder
    "./App.{js,jsx,ts,tsx}", // Existing configuration
  ],
  theme: {
    extend: {},
  },
  plugins: ["nativewind/babel"],
};
