import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/harapan-klinik/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Mengizinkan akses dari IP lain
    port: 3000       // Ubah port jika perlu
  }
})
