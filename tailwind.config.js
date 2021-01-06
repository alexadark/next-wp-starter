const config = require("./styles/themeConfig")
module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    ...config,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
