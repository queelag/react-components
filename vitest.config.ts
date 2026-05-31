import { join } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      react: join(__dirname, 'node_modules/react')
    }
  },
  test: {
    coverage: {
      exclude: ['src/index.ts'],
      include: ['src/**/*.ts'],
      reporter: ['lcov']
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.{ts,tsx}']
  }
})
