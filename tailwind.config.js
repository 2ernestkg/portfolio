module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.css",
    "./node_modules/preline/preline.js",
  ],
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
    },
  },
};
