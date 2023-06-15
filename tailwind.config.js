/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'picton-blue': {
					50: '#f2fdff',
					100: '#e3f9fc',
					200: '#bdf1fc',
					300: '#96e6fa',
					400: '#49cdf5',
					500: '#00abf0',
					600: '#0094d9',
					700: '#0071b3',
					800: '#00518f',
					900: '#00376b',
					950: '#002045',
				},
			},
		},
	},
	plugins: [],
};
