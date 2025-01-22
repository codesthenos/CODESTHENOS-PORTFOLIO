/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
    'md:row-span-1',
    'md:col-span-4',
    'md:col-span-3',
    'md:col-span-2',
    'md:col-span-1',
    'bg-red-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-violet-300',
    'bg-orange-300',
  ],
	theme: {
		extend: {},
	},
	plugins: [],
}
