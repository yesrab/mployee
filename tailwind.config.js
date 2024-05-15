/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    variants: {
      extend: {
        display: ["group-active"], // This enables group-active for display utilities
      },
    },
  },
  plugins: [],
};

