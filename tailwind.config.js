/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7EE",
        navy: { DEFAULT: "#14224B" },
        sky: { DEFAULT: "#C9A24B", light: "#E6CD8E" },
        royal: "#9A7428",
        steel: "#7A6C52",
        line: "#E6D9BC",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: { blob: "62% 38% 55% 45% / 45% 40% 60% 55%" },
    },
  },
  plugins: [],
}
