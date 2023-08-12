import react from '@vitejs/plugin-react';
import { resolve } from 'node:path'; // Node.js 런타임이 기본 제공하는 모듈 (파일 경로)
import { defineConfig } from 'vite';
import ViteSassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSassPlugin({
      outputStyle: 'compressed',
      css: true,
      cssPath: './build/styles'
    })
  ],
  css: {
    devSourcemap: true,
  },
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
