import { cp, rm } from 'fs/promises'
import { bundle } from './fns/bundle.mjs'
import { emitDeclarations } from './fns/emit-declarations.mjs'
import { generateComponents } from './fns/generate-components.mjs'
import { generateProps } from './fns/generate-props.mjs'
import { writeDistPackageJSON } from './fns/write-dist-package-json.mjs'

await rm('dist', { force: true, recursive: true })

await generateComponents()
await generateProps()
await bundle()
await emitDeclarations()
await writeDistPackageJSON()

await cp('LICENSE', 'dist/LICENSE')
await cp('README.md', 'dist/README.md')
