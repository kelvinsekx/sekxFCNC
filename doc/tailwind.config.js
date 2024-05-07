/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "modal-ease-in": "fadeInDown 0.2s ease-in-out forwards",
        "modal-ease-out": "fadeOutUp 0.2s ease-in-out forwards",
        "modal-zoom-in": "zoomIn 0.2s ease-in-out forwards",
        "modal-zoom-out": "zoomOut 0.2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeOutUp: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
        },
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.3)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0.3)",
          },
        },
      },
    },
  },
  plugins: [],
};
