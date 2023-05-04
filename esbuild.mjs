import { build } from 'esbuild'
import { glob } from 'glob'

/** @type {import('esbuild').BuildOptions} */
const OPTIONS = {
  logLevel: 'info',
  minify: true
}

/**
 * ESM
 */
build({
  ...OPTIONS,
  entryPoints: await glob('./src/**/*.{ts,tsx}'),
  format: 'esm',
  outdir: 'dist',
  packages: 'external',
  platform: 'neutral'
}).catch(() => process.exit(1))

/**
 * CJS
 */
for (let element of await glob('./src/components/**/*.tsx')) {
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [element],
    format: 'cjs',
    outfile: element.replace('src', 'dist').replace('.tsx', '.cjs'),
    platform: 'browser',
    treeShaking: true
  }).catch(() => process.exit(1))
}

/**
 * IIFE
 */
build({
  ...OPTIONS,
  bundle: true,
  entryPoints: ['src/index.ts'],
  format: 'iife',
  globalName: 'AracnaReactComponents',
  outfile: 'dist/index.iife.js',
  platform: 'browser',
  treeShaking: true
}).catch(() => process.exit(1))
