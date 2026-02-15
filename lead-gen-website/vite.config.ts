import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <-- ensures assets work with Railway URL
  plugins: [react()],
  server: {
    // these are only used for local dev
    port: 3000,
    open: true,
  },
});
