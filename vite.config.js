import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path so assets work seamlessly on GitHub Pages & Vercel
  base: './',
});

