import { writeFile } from 'fs/promises'
import { glob } from 'glob'
import PACKAGE from '../package.json' assert { type: 'json' }

PACKAGE.exports = {
  '.': {
    import: './index.js',
    require: {
      default: './index.cjs.js',
      types: './index.d.ts'
    }
  }
}

for (let path of await glob('src/components/**/*.ts')) {
  let folder, name

  folder = path.replace('src/components/', '').split('/')[0]
  name = path.replace('src/components/').split('/')[1].replace('.ts', '')

  PACKAGE.exports[`./${folder}/${name}`] = {
    import: `./components/${folder}/${name}.js`,
    require: {
      default: `./components/${folder}/${name}.cjs.js`,
      types: `./components/${folder}/${name}.d.ts`
    }
  }
}

await writeFile('package.json', JSON.stringify(PACKAGE, null, 2))
