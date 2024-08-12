import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type {
  AracnaAriaComboBoxProps,
  AracnaAriaComboBoxButtonProps,
  AracnaAriaComboBoxGroupProps,
  AracnaAriaComboBoxInputProps,
  AracnaAriaComboBoxListProps,
  AracnaAriaComboBoxOptionProps
} from '../../definitions/props.js'
import type {
  AracnaAriaComboBoxElementAttributes,
  AracnaAriaComboBoxElementEventMap,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'

export const AracnaAriaComboBox: ElementComponent<AracnaAriaComboBoxElement, AracnaAriaComboBoxProps> = createFormControlElementComponent<
  AracnaAriaComboBoxElement,
  AracnaAriaComboBoxElementAttributes<AracnaAriaComboBoxOptionElement>,
  AracnaAriaComboBoxElementEventMap
>('aracna-aria-combobox', AracnaAriaComboBoxElement, ['collapse', 'expand'])

export const AracnaAriaComboBoxButton: ElementComponent<AracnaAriaComboBoxButtonElement, AracnaAriaComboBoxButtonProps> = createBaseElementComponent<
  AracnaAriaComboBoxButtonElement,
  AracnaAriaComboBoxButtonElementAttributes,
  AracnaAriaComboBoxButtonElementEventMap
>('aracna-aria-combobox-button', AracnaAriaComboBoxButtonElement)

export const AracnaAriaComboBoxGroup: ElementComponent<AracnaAriaComboBoxGroupElement, AracnaAriaComboBoxGroupProps> = createBaseElementComponent<
  AracnaAriaComboBoxGroupElement,
  AracnaAriaComboBoxGroupElementAttributes,
  AracnaAriaComboBoxGroupElementEventMap
>('aracna-aria-combobox-group', AracnaAriaComboBoxGroupElement)

export const AracnaAriaComboBoxInput: ElementComponent<AracnaAriaComboBoxInputElement, AracnaAriaComboBoxInputProps> = createBaseElementComponent<
  AracnaAriaComboBoxInputElement,
  AracnaAriaComboBoxInputElementAttributes,
  AracnaAriaComboBoxInputElementEventMap
>('aracna-aria-combobox-input', AracnaAriaComboBoxInputElement)

export const AracnaAriaComboBoxList: ElementComponent<AracnaAriaComboBoxListElement, AracnaAriaComboBoxListProps> = createFloatingElementComponent<
  AracnaAriaComboBoxListElement,
  AracnaAriaComboBoxListElementAttributes,
  AracnaAriaComboBoxListElementEventMap
>('aracna-aria-combobox-list', AracnaAriaComboBoxListElement)

export const AracnaAriaComboBoxOption: ElementComponent<AracnaAriaComboBoxOptionElement, AracnaAriaComboBoxOptionProps> = createBaseElementComponent<
  AracnaAriaComboBoxOptionElement,
  AracnaAriaComboBoxOptionElementAttributes,
  AracnaAriaComboBoxOptionElementEventMap
>('aracna-aria-combobox-option', AracnaAriaComboBoxOptionElement, ['select', 'unselect'])
