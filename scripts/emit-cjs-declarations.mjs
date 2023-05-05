import { copyFile } from 'fs/promises'
import { glob } from 'glob'

for (let dts of await glob('dist/components/**/*.d.ts')) {
  await copyFile(dts, dts.replace('.d.ts', '.cjs.d.ts'))
}
