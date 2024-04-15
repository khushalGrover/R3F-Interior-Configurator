import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'r3f-vite-starter',
  plugins: [react()],
  server: {
    host: true
  },
})
