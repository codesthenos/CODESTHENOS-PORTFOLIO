import { defineMarkdocConfig, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  nodes: {
    link: {
      render: component('./src/components/index/AnchorMD.astro'),
      attributes: {
        href: { type: String, required: true },
        target: { type: String },
        rel: { type: String },
        title: { type: String }
      }
    }
  }
})