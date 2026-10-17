import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('mathlive')) return 'vendor-mathlive';
            if (id.includes('katex')) return 'vendor-katex';
            if (id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor-core';
          }
        }
      }
    }
  }
})
