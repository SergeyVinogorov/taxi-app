module.exports = {
  plugins: [
    "postcss-import",
    "postcss-nesting",
		["postcss-custom-properties", { preserve: false }],
		"autoprefixer"
  ],
};