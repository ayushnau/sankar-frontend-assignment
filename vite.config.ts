import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths, so the built dist/index.html also opens straight
  // from the filesystem — not only when served over HTTP.
  base: './',
  plugins: [react(), tailwindcss()],
})
