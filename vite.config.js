import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // supaya aset juga bekerja saat di-host di GitHub Pages
})
