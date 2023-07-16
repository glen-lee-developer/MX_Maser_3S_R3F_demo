/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			serif: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
			sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
