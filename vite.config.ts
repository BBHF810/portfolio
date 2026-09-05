import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Actions (GitHub Pages) 環境では '/portfolio/'、Vercelやローカル環境では '/'
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
})
