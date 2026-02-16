/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3B82F6",      // Blue 500
          primaryDark: "#1E40AF",  // Blue 800
          accent: "#8B5CF6",       // Purple 500
          accentDark: "#6D28D9",   // Purple 700
          neutral: "#F9FAFB",      // Gray 50
          text: "#374151"          // Gray 700
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // فونت مدرن و خوانا
      },
    },
  },
  plugins: [],
}
