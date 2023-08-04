/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        fade: "fade 0.2s ease-out",
        zoom: "zoom 0.3s cubic-bezier(0.35, 1.55, 0.6, 1)",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoom: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
};
