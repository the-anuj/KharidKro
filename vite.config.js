import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '192.168.19.133', // Binds Vite to listen on all network interfaces
    port: 5173, // You can change the port if necessary
  },
})


