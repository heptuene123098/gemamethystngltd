/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        webpurple: "#6E3994",
        lightwhite: " rgba(255, 255, 255, 0.9)",
        vantablack: "#1A1A1A",
      },
      keyframes: {
        'rotate-pulse': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%':       { transform: 'rotate(12deg)' },
        },
      },
      animation: {
        'rotate-pulse': 'rotate-pulse 1s ease-in-out infinite',
      },
    },
    screens: {
      wide: "1440px",
      desktop: { max: "1439px" },
      laptop: { max: "1024px" },
      tablet: { max: "900px" },
      phoneS: { max: "700px" },
      phoneL: { max: "500px" },
      phoneP: { max: "390px" },
    },
  },
  plugins: [],
};
