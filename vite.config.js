import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PROJECT-Shopping_Cart/', // Nombre exacto del repositorio
  build: {
    outDir: 'dist', // Carpeta de salida para la construcción
  },
  resolve: {
    alias: {
      // Asegura que las rutas relativas sean compatibles
      '/@': '/src',
    },
  },
  server: {
    open: true, // Abre automáticamente en el navegador al iniciar localmente
    port: 3000, // Puerto para desarrollo local
  },
})
