/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			lineHeight: {
				paragraph: '1.1rem',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#FFFFFF',
			//dark theme
			'd-bg': '#0A0A0D',
			'd-border': '#1E1E1E',
			'd-text': '#ffffff',
			//light theme
			'l-bg': '#ECECEC',
			'l-border': '#CACACA',
			'l-text': '#0A0A0D',
			footer: '#0E0B36',
			'd-emph': '#5566FF',
      'l-emph': '#220AB4'
		},
	},
	plugins: [],
};
