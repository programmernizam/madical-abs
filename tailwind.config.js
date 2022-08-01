/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#28bf82",

          secondary: "#eaed42",

          accent: "#19D3AE",

          neutral: "#272730",

          "base-100": "#ffffff",

          info: "#93C4EC",

          success: "#5FE7CC",

          warning: "#DBB50A",

          error: "#ED3169",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
