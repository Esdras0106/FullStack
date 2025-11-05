import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/Clientes': 'http://localhost:3000',
      '/Produtos': 'http://localhost:3000'
    }
  }
});