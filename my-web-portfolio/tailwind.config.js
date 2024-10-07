/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#02030d', // Text color for dark-on-light designs
				// 'primary-bg': '#0a1042', // Text color for dark-on-light designs
				'secondary-bg': '#FEFEFD', // Background for dark-on-light designs
				'main-identity': '#2B6CE5', // Main identity color
				'main-identity-light': '#6393ed',
				'accent-1': '#2053C8', // First accent color
				'accent-2': '#D24E96', // Second accent color
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'signika-negative': ['Signika Negative Variable', 'sans-serif'],
				montserrat: ['Montserrat Variable', 'sans-serif'],
			},
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'3.5xl': '2rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem',
				'10xl': '8rem',
			},
		},
	},
	plugins: [],
};
