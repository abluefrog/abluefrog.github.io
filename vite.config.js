import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // IMPORTANT: your GitHub repo name here
  plugins: [react()]
})
