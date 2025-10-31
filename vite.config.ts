import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { get } from "./src/utils/env";


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
        target: get("VITE_WEAPONS_API_ENDPOINT"),
        changeOrigin: true,
        secure: false
      }
    }
  }
})
