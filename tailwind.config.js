module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.css",
    "./node_modules/preline/preline.js",
  ],
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100% 100%",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
    },
  },
};
