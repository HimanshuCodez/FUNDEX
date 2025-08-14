/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        yellowBlackPulse: {
          "0%, 100%": { backgroundColor: "#facc15", color: "#000000" }, // Yellow background, black text
          "50%": { backgroundColor: "#000000", color: "#facc15" }, // Black background, yellow text
        },
      },
      animation: {
        yellowBlackPulse: "yellowBlackPulse 1.5s ease-in-out infinite",
      },
    },
  
  },
  plugins: [],
}
