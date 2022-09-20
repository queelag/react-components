import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  external: ['@queelag/core', '@queelag/preact', '@queelag/web', '@queelag/web-components', 'preact', 'preact/compat', 'preact/hooks'],
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'esm'
    }
  ],
  plugins: [strip({ include: ['src/**/*.ts'], functions: ['[A-Z][a-z]+Logger.(verbose|debug|info)'] }), terser(), typescript()]
})
