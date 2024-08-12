import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaAriaListBoxProps, AracnaAriaListBoxOptionProps } from '../../definitions/props.js'
import type {
  AracnaAriaListBoxElementAttributes,
  AracnaAriaListBoxElementEventMap,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
} from '@aracna/web-components'
import { AracnaAriaListBoxElement, AracnaAriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'

export const AracnaAriaListBox: ElementComponent<AracnaAriaListBoxElement, AracnaAriaListBoxProps> = createFormControlElementComponent<
  AracnaAriaListBoxElement,
  AracnaAriaListBoxElementAttributes<AracnaAriaListBoxOptionElement>,
  AracnaAriaListBoxElementEventMap
>('aracna-aria-listbox', AracnaAriaListBoxElement)

export const AracnaAriaListBoxOption: ElementComponent<AracnaAriaListBoxOptionElement, AracnaAriaListBoxOptionProps> = createBaseElementComponent<
  AracnaAriaListBoxOptionElement,
  AracnaAriaListBoxOptionElementAttributes,
  AracnaAriaListBoxOptionElementEventMap
>('aracna-aria-listbox-option', AracnaAriaListBoxOptionElement, ['select', 'unselect'])
