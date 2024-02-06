module.exports = {
  content: [
    "./src/**/*.tsx", 
    "./src/**/*.css", 
    "./node_modules/preline/preline.js"
  ],
  plugins: [
    require("@tailwindcss/forms"), 
    require("preline/plugin")
  ],
  theme: {
  }
};
