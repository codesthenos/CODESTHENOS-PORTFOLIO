/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
    'md:row-span-1',
    'md:col-span-4',
    'md:col-span-3',
    'md:col-span-2',
    'md:col-span-1',
    'md:bg-red-300',
    'md:bg-blue-300',
    'md:bg-green-300',
    'md:bg-yellow-300',
    'md:bg-violet-300',
    'md:bg-orange-300'
  ],
	theme: {
		extend: {},
	},
	plugins: [],
}
