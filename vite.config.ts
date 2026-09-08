import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub Pages *user site* at https://meedoahmedd.github.io/
// (repo name: meedoahmedd.github.io), so the site is served from the domain
// root and the base path is "/" in every environment.
const base = '/'

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
