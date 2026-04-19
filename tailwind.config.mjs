/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        /* University of Michigan Maize — Pantone 7406, official #FFCB05 */
        maize: {
          50:  "#FFFBE6",
          100: "#FFF3B3",
          200: "#FFE980",
          300: "#FFE066",
          400: "#FFD633",
          500: "#FFCB05", // Official UM Maize
          600: "#E6B704",
          700: "#B89503",
          800: "#8A7002",
          900: "#5C4B01",
        },
        /* University of Michigan Blue — Pantone 282, official #00274C */
        umblue: {
          50:  "#E8EEF5",
          100: "#C5D1E2",
          200: "#8FA4C0",
          300: "#5A779E",
          400: "#2D5480",
          500: "#1A4877",
          600: "#0E3A66",
          700: "#002E5D",
          800: "#00274C", // Official UM Blue
          900: "#001E3C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
