import { createBaseElementComponent, createFormFieldElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAriaComboBoxProps,
  AracnaAriaComboBoxButtonProps,
  AracnaAriaComboBoxGroupProps,
  AracnaAriaComboBoxInputProps,
  AracnaAriaComboBoxListProps,
  AracnaAriaComboBoxOptionProps
} from '@aracna/react'
import type {
  AriaComboBoxElementAttributes,
  AriaComboBoxElementEventMap,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
} from '@aracna/web'
import {
  AriaComboBoxElement,
  AriaComboBoxButtonElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'

export const AracnaAriaComboBox: ElementComponent<AriaComboBoxElement, AracnaAriaComboBoxProps> = createFormFieldElementComponent<
  AriaComboBoxElement,
  AriaComboBoxElementAttributes<AriaComboBoxOptionElement>,
  AriaComboBoxElementEventMap
>('aracna-aria-combobox', AriaComboBoxElement, ['combo-box-collapse', 'combo-box-expand'])

export const AracnaAriaComboBoxButton: ElementComponent<AriaComboBoxButtonElement, AracnaAriaComboBoxButtonProps> = createBaseElementComponent<
  AriaComboBoxButtonElement,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap
>('aracna-aria-combobox-button', AriaComboBoxButtonElement)

export const AracnaAriaComboBoxGroup: ElementComponent<AriaComboBoxGroupElement, AracnaAriaComboBoxGroupProps> = createBaseElementComponent<
  AriaComboBoxGroupElement,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap
>('aracna-aria-combobox-group', AriaComboBoxGroupElement)

export const AracnaAriaComboBoxInput: ElementComponent<AriaComboBoxInputElement, AracnaAriaComboBoxInputProps> = createBaseElementComponent<
  AriaComboBoxInputElement,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap
>('aracna-aria-combobox-input', AriaComboBoxInputElement)

export const AracnaAriaComboBoxList: ElementComponent<AriaComboBoxListElement, AracnaAriaComboBoxListProps> = createFloatingElementComponent<
  AriaComboBoxListElement,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap
>('aracna-aria-combobox-list', AriaComboBoxListElement)

export const AracnaAriaComboBoxOption: ElementComponent<AriaComboBoxOptionElement, AracnaAriaComboBoxOptionProps> = createBaseElementComponent<
  AriaComboBoxOptionElement,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
>('aracna-aria-combobox-option', AriaComboBoxOptionElement, ['combo-box-option-select'])
