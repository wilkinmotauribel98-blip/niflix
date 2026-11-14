import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        for (const asset of Object.values(ctx.bundle)) {
          if (asset.type !== 'asset' || !asset.fileName.endsWith('.css')) continue
          const css = asset.source.toString().replace(/<\/style/gi, '<\\/style')
          const href = `/${asset.fileName}`
          const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const linkRe = new RegExp(`<link[^>]*href="${escaped}"[^>]*>`, 'i')
          if (linkRe.test(html)) {
            html = html.replace(linkRe, `<style>${css}</style>`)
            delete ctx.bundle[asset.fileName]
          }
        }
        return html
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
