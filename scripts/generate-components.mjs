import { removeArrayDuplicates } from '@aracna/core'
import { appendFile, mkdir, readFile, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

const GENERICS = new Map([
  ['AriaMenuElement', 'AriaMenuItemElement'],
  ['AriaListBoxElement', 'AriaListBoxOptionElement'],
  ['AriaComboBoxElement', 'AriaComboBoxOptionElement'],
  ['SelectElement', 'SelectOptionElement'],
  ['MenuElement', 'MenuItemElement']
])

const EXTENDS = new Map([
  ['AriaComboBoxListElement', 'Floating'],
  ['AriaMenuSubMenuElement', 'Floating'],
  ['AriaTooltipContentElement', 'Floating'],
  ['MenuSubMenuElement', 'Floating'],
  ['SelectElement', 'Floating'],
  ['TooltipContentElement', 'Floating'],
  ['AlertDialogElement', 'FocusTrap'],
  ['AriaAlertDialogElement', 'FocusTrap'],
  ['AriaDialogElement', 'FocusTrap'],
  ['DialogElement', 'FocusTrap'],
  ['AriaCheckBoxElement', 'FormField'],
  ['AriaComboBoxElement', 'FormField'],
  ['AriaRadioGroupElement', 'FormField'],
  ['AriaSliderElement', 'FormField'],
  ['AriaSwitchElement', 'FormField'],
  ['CheckBoxElement', 'FormField'],
  ['ComboBoxElement', 'FormField'],
  ['InputElement', 'FormField'],
  ['InputFileElement', 'FormField'],
  ['RadioGroupElement', 'FormField'],
  ['SliderElement', 'FormField'],
  ['SwitchElement', 'FormField'],
  ['TextAreaElement', 'FormField']
])

const EVENTS = new Map([
  ['AriaCarouselSlideElement', ['carousel-slide-activate', 'carousel-slide-deactive']],
  ['AriaSliderElement', ['slider-change']],
  ['AriaSliderThumbElement', ['slider-thumb-move']],
  ['AriaTabsTabElement', ['tabs-tab-selection']],
  ['ButtonElement', ['button-click']],
  ['CarouselSlideElement', ['carousel-slide-activate', 'carousel-slide-deactive']],
  ['FormElement', ['form-submit']],
  ['SliderElement', ['slider-change']],
  ['SliderThumbElement', ['slider-thumb-move']],
  ['TabsTabElement', ['tabs-tab-selection']]
])

await rm('src/components', { force: true, recursive: true })
await mkdir('src/components')
await writeFile('src/index.ts', '')

for (let path of await glob('node_modules/@aracna/web-components/elements/{aria,data,feedback,input,layout,navigation,surface}/*-element.js')) {
  let folder, name, dts, elements, ts

  folder = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[0]
  name = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[1].replace('.js', '')

  dts = await readFile(path.replace('.js', '.d.ts'), 'utf8')
  elements = dts.match(/'aracna-[a-z-]+': [a-zA-Z]+/gm).map((match) => ({ element: match.split(':')[1].trim(), tag: match.split(':')[0].replace(/'/g, '') }))

  ts = /* HTML */ `
    <script>
      import { ${removeArrayDuplicates(
        elements.reduce(
          (creates, { element }) => [...creates, ...(EXTENDS.has(element) ? [`create${EXTENDS.get(element)}ElementComponent`] : [])],
          ['createBaseElementComponent']
        )
      )} } from '@aracna/react'
      import type { ElementComponent } from '@aracna/react'
      import type { ${elements.map(({ element }) => `Aracna${element.replace('Element', 'Props')}`).join(', ')} } from '@aracna/react'
      import type { ${elements.map(({ element }) => `${element}Attributes, ${element}EventMap`).join(', ')} } from '@aracna/web'
      import { ${elements.map(({ element }) => element).join(', ')} } from '@aracna/web-components/elements/${folder}/${name}'

      ${elements
        .map(({ element, tag }) =>
          [
            `export const Aracna${element.replace('Element', '')}: ElementComponent<${element}, Aracna${element.replace('Element', 'Props')}> = `,
            `create${EXTENDS.get(element) ?? 'Base'}ElementComponent`,
            `<${element}, ${element}Attributes${GENERICS.has(element) ? `<${GENERICS.get(element)}>` : ''}, ${element}EventMap>`,
            `('${tag}', ${element}${EVENTS.has(element) ? `, ${JSON.stringify(EVENTS.get(element))}` : ''})`
          ].join('')
        )
        .join('\n\n')}
    </script>
  `

  ts = await format(ts.replace(/<\/?script>/gm, ''), {
    jsxSingleQuote: true,
    parser: 'babel-ts',
    printWidth: 160,
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  })

  await mkdir(`src/components/${folder}`, { recursive: true })
  await writeFile(`src/components/${folder}/${name.replace('-element', '')}.ts`, ts)
  await appendFile('src/index.ts', `export * from './components/${folder}/${name.replace('-element', '')}.js'\n`)
}
