import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Personal-Website/",
  server:{
    port:3000
  },
  build:{
    outDir:"./docs",
  },


})
