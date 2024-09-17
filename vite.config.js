import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ToDo_App/', // Set to your repo name
  plugins: [react()],
})
