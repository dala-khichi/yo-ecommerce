/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

*/

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
       target: 'http://localhost:3001', // Your backend URL
        ///target: 'http://192.168.43.1:3001', // Your backend URL
        changeOrigin: true,
      //  rewrite: path => path.replace(/^\/api/, ''),
      },
      '/uploads': {
        target: 'http://localhost:3001', // Your backend URL
        changeOrigin: true,
     //rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});