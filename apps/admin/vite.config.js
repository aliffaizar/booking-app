import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import rollupReplace from '@rollup/plugin-replace'

export default defineConfig({
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  server: { port: 3010 },
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react(),
  ],
})
