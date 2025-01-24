// @ts-check
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links';

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/CODESTHENOS-PORTFOLIO/',
  build: {
    assets: 'astro'
  },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
});