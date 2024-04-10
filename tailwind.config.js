/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6F4F1", // Soft green-blue
        secondary: "#FBD38D", // Soft yellow
        secondaryDark: "#FFC34A", // Darker shade of yellow
        tertiary: "#D6EAF8", // Light blue
        textPrimary: "#2C3E50", // Dark blue
        textSecondary: "#3498DB", // Blue
      },
      fontFamily: {
        heading: "Poppins", // Calm and modern sans-serif font
        body: "Roboto", // Clear and legible sans-serif font
      },
    },
  },

  plugins: [],
};
