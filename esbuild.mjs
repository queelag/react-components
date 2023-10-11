import { getPascalCaseString } from '@aracna/core'
import { build } from 'esbuild'
import globals from 'esbuild-plugin-globals'
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
  entryPoints: await glob('./src/**/*.ts'),
  format: 'esm',
  outdir: 'dist',
  packages: 'external',
  platform: 'neutral'
}).catch(() => process.exit(1))

/**
 * CJS
 */
build({
  ...OPTIONS,
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['@aracna/core', '@aracna/react', '@aracna/web', '@aracna/web-components', '@floating-ui/dom', 'dompurify', 'focus-trap', 'tabbable'],
  format: 'cjs',
  outfile: 'dist/index.cjs',
  platform: 'neutral',
  treeShaking: true
}).catch(() => process.exit(1))

/**
 * COMPONENTS
 */
for (let component of await glob('./src/components/**/*.ts')) {
  /**
   * CJS
   */
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [component],
    external: ['@aracna/core', '@aracna/react', '@aracna/web', '@aracna/web-components', '@floating-ui/dom', 'dompurify', 'focus-trap', 'tabbable'],
    format: 'cjs',
    outfile: component.replace('src', 'dist').replace('.ts', '.cjs'),
    platform: 'neutral',
    treeShaking: true
  }).catch(() => process.exit(1))

  /**
   * IIFE
   */
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [component],
    format: 'iife',
    globalName: 'Aracna' + getPascalCaseString(component.replace(/src\/components\/[a-z]+\//, '').replace('.ts', '')),
    outfile: component.replace('src', 'dist').replace('.ts', '.iife.js'),
    platform: 'browser',
    plugins: [globals({ react: 'React' })],
    treeShaking: true
  }).catch(() => process.exit(1))
}
