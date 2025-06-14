import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathname = new URL('./', import.meta.url).pathname;


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "./src",
      "@ui": pathname + "src/ui"
    }
  }
})
