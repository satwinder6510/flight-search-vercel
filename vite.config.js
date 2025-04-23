import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // only for `npm run dev` locally
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
});
