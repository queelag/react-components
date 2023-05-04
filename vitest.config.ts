import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: ['src/index.ts'],
      include: ['src/**/*.ts'],
      reporter: ['lcov']
    },
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}']
  },
  resolve: {
    alias: {
      '@aracna/react/node_modules/react': path.resolve(__dirname, './node_modules/react'),
      '@aracna/react/node_modules/react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  }
})
