import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaListBoxProps, AracnaAriaListBoxOptionProps } from '@aracna/react'
import type {
  AriaListBoxElementAttributes,
  AriaListBoxElementEventMap,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
} from '@aracna/web'
import { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'

export const AracnaAriaListBox: ElementComponent<AriaListBoxElement, AracnaAriaListBoxProps> = createBaseElementComponent<
  AriaListBoxElement,
  AriaListBoxElementAttributes<AriaListBoxOptionElement>,
  AriaListBoxElementEventMap
>('aracna-aria-listbox', AriaListBoxElement)

export const AracnaAriaListBoxOption: ElementComponent<AriaListBoxOptionElement, AracnaAriaListBoxOptionProps> = createBaseElementComponent<
  AriaListBoxOptionElement,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
>('aracna-aria-listbox-option', AriaListBoxOptionElement)
