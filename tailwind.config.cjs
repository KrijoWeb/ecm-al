/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        logoBg: "#ED1C24",
        neutralLighter: "#eeeff3",
        neutralDarker: "#565656",
      },
    },
  },
  plugins: [require("daisyui","@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        emc: {
          primary: "#aa0020",
          secondary: "#12765C",
          neutral: "#e6e7eb",
          "--rounded-box": "0",
          "--rounded-btn": "0",
        },
      },
    ],
  },
};
