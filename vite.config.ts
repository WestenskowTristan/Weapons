import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: process.env.VITE_WEAPONS_API_ENDPOINT || 'http://weapons-api:80',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,  // Keep the full path including /api
      }
    }
  }
})
