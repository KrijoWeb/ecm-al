/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ecm: {
          primary: "#aa0020",
          "base-100": "#ffffff",
          neutral: "#e6e7eb",
        },
      },
    ],
  },
};
