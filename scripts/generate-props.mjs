import { readFile, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { basename, dirname, extname } from 'path'
import { format } from 'prettier'

const GENERICS = new Map([
  ['AracnaAccordionElement', ['T']],
  ['AracnaAriaMenuElement', ['AracnaAriaMenuItemElement']],
  ['AracnaAriaListBoxElement', ['AracnaAriaListBoxOptionElement']],
  ['AracnaAriaComboBoxElement', ['AracnaAriaComboBoxOptionElement']],
  ['AracnaBreadcrumbElement', ['T']],
  ['AracnaButtonGroupElement', ['T']],
  ['AracnaCarouselElement', ['T']],
  ['AracnaDisclosureElement', ['T']],
  ['AracnaFeedElement', ['T']],
  ['AracnaFormElement', ['T']],
  ['AracnaListElement', ['T']],
  ['AracnaListBoxElement', ['AracnaListBoxOptionElement']],
  ['AracnaMenuElement', ['AracnaMenuItemElement', 'T']],
  ['AracnaMenuItemElement', ['T']],
  ['AracnaNavigationBarElement', ['T']],
  ['AracnaNavigationRailElement', ['T']],
  ['AracnaRadioGroupElement', ['T']],
  ['AracnaSelectElement', ['AracnaSelectOptionElement', 'T']],
  ['AracnaSliderElement', ['T']],
  ['AracnaTabsElement', ['T']]
])

let imports, exports, ts

imports = {
  web: [],
  webc: []
}
exports = []

for (let path of await glob('node_modules/@aracna/web-components/elements/{aria,data,feedback,input,layout,navigation,surface,typography}/*-element.js')) {
  let folder, name, dts, elements

  folder = basename(dirname(path))
  name = basename(path).replace(extname(path), '')

  dts = await readFile(path.replace('.js', '.d.ts'), 'utf8')
  elements = dts.match(/'aracna-[a-z-]+': [a-zA-Z]+/gm).map((match) => 'Aracna' + match.split(':')[1].trim())

  imports.web.push(...elements.map((element) => ({ element, ts: `${element}Attributes, ${element}EventMap` })))
  imports.webc.push({ name, ts: `import type { ${elements.join(', ')} } from '@aracna/web-components/elements/${folder}/${name}'` })

  exports.push({
    name,
    ts: /* HTML */ `
      <script>
        ${elements
          .map((element) =>
            [
              `export type ${element.replace('Element', '')}Props`,
              GENERICS.get(element)?.[0] === 'T' ? `<T = any>` : GENERICS.get(element)?.[1] === 'T' ? '<T = any>' : '',
              ` = ElementComponentProps<${element}, ${element}Attributes`,
              GENERICS.has(element) ? `<${[...GENERICS.get(element)].join(',')}>` : '',
              `, ${element}EventMap>`
            ].join('')
          )
          .join('\n')}
      </script>
    `
  })
}

imports.web.sort((a, b) => (a.element > b.element ? 1 : -1))
imports.webc.sort((a, b) => (a.name > b.name ? 1 : -1))
exports.sort((a, b) => (a.name > b.name ? 1 : -1))

ts = /* HTML */ `
  <script>
    import type { ${imports.web.map((w) => w.ts).join(',')} } from '@aracna/web-components'
    ${imports.webc.map((w) => w.ts).join('\n')}
    import type { ElementComponentProps } from '@aracna/react'

    ${exports.map((e) => e.ts).join('\n')}
  </script>
`

ts =
  '\n' +
  (await format(ts.replace(/<\/?script>/gm, ''), {
    jsxSingleQuote: true,
    parser: 'babel-ts',
    printWidth: 160,
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  }))

await writeFile('src/definitions/props.ts', ts)
