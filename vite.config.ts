/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithms: ['gzip'], exclude: [/\.(br)$/, /\.(gz)$/] }),
    compression({ algorithms: ['brotliCompress'], exclude: [/\.(br)$/, /\.(gz)$/] }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'lucide';
          if (id.includes('node_modules/react-router')) return 'router';
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react-vendor';
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
    exclude: ['e2e/**', 'node_modules/**'],
  },
})
