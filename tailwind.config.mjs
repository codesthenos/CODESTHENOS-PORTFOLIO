import typography from '@tailwindcss/typography'

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
    'md:bg-orange-300',
    'order-1',
    'order-2',
    'order-3',
    'order-4',
    'order-5',
    'order-6'
  ],
	theme: {
		extend: {
      backgroundImage: {
        'pattern': 'url("/CODESTHENOS-PORTFOLIO/background-4k.jpg")'
      },
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff'
      },
      typography: {
        DEFAULT: {
          css: {
            'li ::marker': {
              content: 'none'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            }
          }
        }
      }
    }
	},
	plugins: [typography]
}
