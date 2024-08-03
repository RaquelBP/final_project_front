import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 10000,
    },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
  },
})

