import { AriaListBoxOptionProps, AriaListBoxProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AriaListBoxElementAttributes, AriaListBoxElementEventMap, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap } from '@aracna/web'
import { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria.list.box.element.js'

export const AracnaAriaListBox: ElementComponent<AriaListBoxElement, AriaListBoxProps> = createBaseElementComponent<
  AriaListBoxElement,
  AriaListBoxElementAttributes<AriaListBoxOptionElement>,
  AriaListBoxElementEventMap
>('aracna-aria-listbox', AriaListBoxElement)

export const AracnaAriaListBoxOption: ElementComponent<AriaListBoxOptionElement, AriaListBoxOptionProps> = createBaseElementComponent<
  AriaListBoxOptionElement,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
>('aracna-aria-listbox-option', AriaListBoxOptionElement)
