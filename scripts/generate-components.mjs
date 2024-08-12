import { getKebabCaseString, removeArrayDuplicates } from '@aracna/core'
import { mkdir, readFile, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

const GENERICS = new Map([
  /**
   * ARIA
   */
  ['AracnaAriaComboBoxElement', 'AracnaAriaComboBoxOptionElement'],
  ['AracnaAriaListBoxElement', 'AracnaAriaListBoxOptionElement'],
  ['AracnaAriaMenuElement', 'AracnaAriaMenuItemElement'],
  /**
   * Input
   */
  ['AracnaListBoxElement', 'AracnaListBoxOptionElement'],
  ['AracnaSelectElement', 'AracnaSelectOptionElement'],
  /**
   * Navigation
   */
  ['AracnaMenuElement', 'AracnaMenuItemElement']
])

const EXTENDS = new Map([
  /**
   * ARIA
   */
  ['AracnaAriaAlertDialogElement', 'FocusTrap'],
  ['AracnaAriaCheckBoxElement', 'FormControl'],
  ['AracnaAriaComboBoxElement', 'FormControl'],
  ['AracnaAriaComboBoxListElement', 'Floating'],
  ['AracnaAriaDialogElement', 'FocusTrap'],
  ['AracnaAriaListBoxElement', 'FormControl'],
  ['AracnaAriaMenuSubMenuElement', 'Floating'],
  ['AracnaAriaRadioGroupElement', 'FormControl'],
  ['AracnaAriaSliderElement', 'FormControl'],
  ['AracnaAriaSwitchElement', 'FormControl'],
  ['AracnaAriaTooltipContentElement', 'Floating'],
  /**
   * Data
   */
  ['AracnaTooltipContentElement', 'Floating'],
  /**
   * Feedback
   */
  ['AracnaAlertDialogElement', 'FocusTrap'],
  ['AracnaDialogElement', 'FocusTrap'],
  /**
   * Input
   */
  ['AracnaCheckBoxElement', 'FormControl'],
  ['AracnaInputElement', 'FormControl'],
  ['AracnaInputFileElement', 'FormControl'],
  ['AracnaListBoxElement', 'FormControl'],
  ['AracnaRadioGroupElement', 'FormControl'],
  ['AracnaSelectElement', 'FormControl'],
  ['AracnaSelectListElement', 'Floating'],
  ['AracnaSliderElement', 'FormControl'],
  ['AracnaSwitchElement', 'FormControl'],
  ['AracnaTextAreaElement', 'FormControl'],
  /**
   * Navigation
   */
  ['AracnaMenuSubMenuElement', 'Floating']
])

const EVENTS = new Map([
  /**
   * ARIA
   */
  ['AracnaAriaAccordionSectionElement', ['collapse', 'expand']],
  ['AracnaAriaCarouselElement', ['rotation-pause', 'rotation-resume', 'rotation-start', 'rotation-stop']],
  ['AracnaAriaCarouselSlideElement', ['activate', 'deactivate']],
  ['AracnaAriaCarouselTabElement', ['activate', 'deactivate']],
  ['AracnaAriaCheckBoxElement', ['check', 'uncheck']],
  ['AracnaAriaComboBoxElement', ['collapse', 'expand']],
  ['AracnaAriaComboBoxOptionElement', ['select', 'unselect']],
  ['AracnaAriaDisclosureSectionElement', ['collapse', 'expand']],
  ['AracnaAriaListBoxOptionElement', ['select', 'unselect']],
  ['AracnaAriaMenuSubMenuElement', ['collapse', 'expand']],
  ['AracnaAriaRadioButtonElement', ['check', 'uncheck']],
  ['AracnaAriaSliderElement', ['slider-change']],
  ['AracnaAriaSliderThumbElement', ['move']],
  ['AracnaAriaSwitchElement', ['switch-off', 'switch-on']],
  ['AracnaAriaTabsTabElement', ['select', 'unselect']],
  ['AracnaAriaTooltipElement', ['hide', 'show']],
  /**
   * Data
   */
  ['AracnaCarouselElement', ['rotation-pause', 'rotation-resume', 'rotation-start', 'rotation-stop']],
  ['AracnaCarouselSlideElement', ['activate', 'deactivate']],
  ['AracnaCarouselTabElement', ['activate', 'deactivate']],
  ['AracnaIconElement', ['fetch', 'parse']],
  ['AracnaImageElement', ['image-load', 'image-load-error']],
  ['AracnaTooltipElement', ['hide', 'show']],
  /**
   * Feedback
   */
  ['AracnaAlertDialogElement', ['dialog-close', 'dialog-open']],
  ['AracnaDialogElement', ['dialog-close', 'dialog-open']],
  /**
   * Input
   */
  ['AracnaButtonElement', ['button-click']],
  ['AracnaCheckBoxElement', ['check', 'uncheck']],
  ['AracnaFormElement', ['form-submit']],
  ['AracnaListBoxOptionElement', ['select', 'unselect']],
  ['AracnaRadioButtonElement', ['check', 'uncheck']],
  ['AracnaSelectElement', ['collapse', 'expand']],
  ['AracnaSelectOptionElement', ['select', 'unselect']],
  ['AracnaSliderElement', ['slider-change']],
  ['AracnaSliderThumbElement', ['move']],
  ['AracnaSwitchElement', ['switch-off', 'switch-on']],
  /**
   * Navigation
   */
  ['AracnaMenuSubMenuElement', ['collapse', 'expand']],
  ['AracnaTabsTabElement', ['select']],
  /**
   * Surface
   */
  ['AracnaAccordionSectionElement', ['collapse', 'expand']],
  ['AracnaDisclosureSectionElement', ['collapse', 'expand']]
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
      import type { ElementComponent } from '@aracna/react'
      ${removeArrayDuplicates(
        elements
          .reduce(
            (creates, { element }) => [...creates, ...(EXTENDS.has(element) ? [`create${EXTENDS.get(element)}ElementComponent`] : [])],
            ['createBaseElementComponent']
          )
          .map((fn) => `import { ${fn} } from '../../functions/${getKebabCaseString(fn)}.js'`)
      ).join('\n')}
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
