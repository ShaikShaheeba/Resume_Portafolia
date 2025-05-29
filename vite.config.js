import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})

{/*export default defineConfig({
  base: './', // ✅ Use relative path so assets load from root
  plugins: [react()],
}) */}
