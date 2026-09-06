import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://<user>.github.io/mohamed-ahmed-portfolio/
// so assets must be served from that sub-path in production.
// In dev, base stays "/" for a clean localhost experience.
const base =
  process.env.NODE_ENV === 'production' ? '/mohamed-ahmed-portfolio/' : '/'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [
    figmaAssetResolver(),
    // Both plugins are required by the Figma Make setup — do not remove.
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
