/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
			},
			backgroundImage: {
				'hero-pattern': "url('/assets/photos/br_lc.jpeg')",
			  }
		},
	},
	plugins: [],
}
