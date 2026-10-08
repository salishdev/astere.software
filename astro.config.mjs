import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://astere.software',
  integrations: [mdx()],
  // Keep the privacy policy's quotes exactly as written.
  markdown: { smartypants: false },
  // Emit about.html rather than about/index.html so Cloudflare Pages serves
  // /about directly instead of redirecting to /about/.
  build: { format: 'file' },
  trailingSlash: 'never',
})
