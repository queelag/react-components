import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaListBoxProps, AracnaAracnaAriaListBoxOptionProps } from '../../definitions/props.js'
import type {
  AracnaAriaListBoxElementAttributes,
  AracnaAriaListBoxElementEventMap,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
} from '@aracna/web-components'
import { AracnaAriaListBoxElement, AracnaAriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'

export const AracnaAriaListBox: ElementComponent<AracnaAriaListBoxElement, AracnaAracnaAriaListBoxProps> = createBaseElementComponent<
  AracnaAriaListBoxElement,
  AracnaAriaListBoxElementAttributes<AracnaAriaListBoxOptionElement>,
  AracnaAriaListBoxElementEventMap
>('aracna-aria-listbox', AracnaAriaListBoxElement)

export const AracnaAriaListBoxOption: ElementComponent<AracnaAriaListBoxOptionElement, AracnaAracnaAriaListBoxOptionProps> = createBaseElementComponent<
  AracnaAriaListBoxOptionElement,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
>('aracna-aria-listbox-option', AracnaAriaListBoxOptionElement)
