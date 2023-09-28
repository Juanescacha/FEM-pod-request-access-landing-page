/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					cyan: "#2BD0D0",
					lightCyan: "#9AE3E3",
					darkViolet: "#3A3054",
					red: "#F46363",
				},
				neutral: {
					gray: "#BFBFBF",
					grayishViolet: "#9E9AA8",
					darkestBlue: "#34313D",
					darkestViolet: "#232127",
				},
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			screens: {
				sm: "375px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
}
