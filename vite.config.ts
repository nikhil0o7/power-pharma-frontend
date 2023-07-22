import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app/',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@db': '/src/components/Provider/index.ts',
      '@pages': '/src/pages',
      '@queries': '/src/queries/index.ts',
      '@src/*': '/src/*',
      '@typings': '/src/types/index.ts',
      '@utils': '/src/utils/index.ts',
    },
  },
  server: {
    port: 3006,
  }
})
