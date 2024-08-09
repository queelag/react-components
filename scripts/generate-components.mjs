import { removeArrayDuplicates } from '@aracna/core'
import { mkdir, readFile, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

const GENERICS = new Map([
  ['AracnaAriaMenuElement', 'AracnaAriaMenuItemElement'],
  ['AracnaAriaListBoxElement', 'AracnaAriaListBoxOptionElement'],
  ['AracnaAriaComboBoxElement', 'AracnaAriaComboBoxOptionElement'],
  ['AracnaSelectElement', 'AracnaSelectOptionElement'],
  ['AracnaMenuElement', 'AracnaMenuItemElement']
])

const EXTENDS = new Map([
  ['AracnaAriaComboBoxListElement', 'Floating'],
  ['AracnaAriaMenuSubMenuElement', 'Floating'],
  ['AracnaAriaTooltipContentElement', 'Floating'],
  ['AracnaMenuSubMenuElement', 'Floating'],
  ['AracnaSelectElement', 'Floating'],
  ['AracnaTooltipContentElement', 'Floating'],
  ['AracnaAlertDialogElement', 'FocusTrap'],
  ['AracnaAriaAlertDialogElement', 'FocusTrap'],
  ['AracnaAriaDialogElement', 'FocusTrap'],
  ['AracnaDialogElement', 'FocusTrap'],
  ['AracnaAriaCheckBoxElement', 'FormControl'],
  ['AracnaAriaComboBoxElement', 'FormControl'],
  ['AracnaAriaRadioGroupElement', 'FormControl'],
  ['AracnaAriaSliderElement', 'FormControl'],
  ['AracnaAriaSwitchElement', 'FormControl'],
  ['AracnaCheckBoxElement', 'FormControl'],
  ['AracnaComboBoxElement', 'FormControl'],
  ['AracnaInputElement', 'FormControl'],
  ['AracnaInputFileElement', 'FormControl'],
  ['AracnaRadioGroupElement', 'FormControl'],
  ['AracnaSliderElement', 'FormControl'],
  ['AracnaSwitchElement', 'FormControl'],
  ['AracnaTextAreaElement', 'FormControl']
])

const EVENTS = new Map([
  ['AracnaAlertDialogElement', ['dialog-close', 'dialog-open']],
  ['AracnaAriaCarouselSlideElement', ['carousel-slide-activate', 'carousel-slide-deactive']],
  ['AracnaAriaComboBoxElement', ['combo-box-collapse', 'combo-box-expand']],
  ['AracnaAriaComboBoxOptionElement', ['combo-box-option-select']],
  ['AracnaAriaSliderElement', ['slider-change']],
  ['AracnaAriaSliderThumbElement', ['slider-thumb-move']],
  ['AracnaAriaTabsTabElement', ['tabs-tab-selection']],
  ['AracnaButtonElement', ['button-click']],
  ['AracnaCarouselSlideElement', ['carousel-slide-activate', 'carousel-slide-deactive']],
  ['AracnaDialogElement', ['dialog-close', 'dialog-open']],
  ['AracnaFormElement', ['form-submit']],
  ['AracnaSelectElement', ['combo-box-collapse', 'combo-box-expand']],
  ['AracnaSelectOptionElement', ['combo-box-option-select']],
  ['AracnaSliderElement', ['slider-change']],
  ['AracnaSliderThumbElement', ['slider-thumb-move']],
  ['AracnaTabsTabElement', ['tabs-tab-selection']]
])

await rm('src/components', { force: true, recursive: true })
await mkdir('src/components')

for (let path of await glob('node_modules/@aracna/web-components/elements/{aria,data,feedback,input,layout,navigation,surface}/*-element.js')) {
  let folder, name, dts, elements, ts

  folder = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[0]
  name = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[1].replace('.js', '')

  dts = await readFile(path.replace('.js', '.d.ts'), 'utf8')
  elements = dts
    .match(/'aracna-[a-z-]+': [a-zA-Z]+/gm)
    .map((match) => ({ element: 'Aracna' + match.split(':')[1].trim(), tag: match.split(':')[0].replace(/'/g, '') }))

  ts = /* HTML */ `
    <script>
      import { ${removeArrayDuplicates(
        elements.reduce(
          (creates, { element }) => [...creates, ...(EXTENDS.has(element) ? [`create${EXTENDS.get(element)}ElementComponent`] : [])],
          ['createBaseElementComponent']
        )
      )} } from '@aracna/react'
      import type { ElementComponent } from '@aracna/react'
      import type { ${elements.map(({ element }) => `${element.replace('Element', 'Props')}`).join(', ')} } from '../../definitions/props.js'
      import type { ${elements.map(({ element }) => `${element}Attributes, ${element}EventMap`).join(', ')} } from '@aracna/web-components'
      import { ${elements.map(({ element }) => element).join(', ')} } from '@aracna/web-components/elements/${folder}/${name}'

      ${elements
        .map(({ element, tag }) =>
          [
            `export const ${element.replace('Element', '')}: ElementComponent<${element}, ${element.replace('Element', 'Props')}> = `,
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
}
