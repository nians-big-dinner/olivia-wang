import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  "homepage": "https://kristiyan-filipov.github.io/nians-big-dinner",
  base: '/nians-big-dinner/', // Replace 'my-react-app' with your repo name
  plugins: [
    react(),
    tailwindcss()
  ],
})
