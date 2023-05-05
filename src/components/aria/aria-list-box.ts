import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaListBoxProps, AriaListBoxOptionProps } from '@aracna/react'
import type {
  AriaListBoxElementAttributes,
  AriaListBoxElementEventMap,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
} from '@aracna/web'
import { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/aria/aria-list-box'

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
