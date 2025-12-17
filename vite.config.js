import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from domain root (e.g. https://blueridgeaci.com/)
  base: '/',
})
