import { createBaseElementComponent, createFormFieldElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AriaComboBoxProps,
  AriaComboBoxButtonProps,
  AriaComboBoxGroupProps,
  AriaComboBoxInputProps,
  AriaComboBoxListProps,
  AriaComboBoxOptionProps
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
} from '@aracna/web-components/aria/aria-combo-box'

export const AracnaAriaComboBox: ElementComponent<AriaComboBoxElement, AriaComboBoxProps> = createFormFieldElementComponent<
  AriaComboBoxElement,
  AriaComboBoxElementAttributes<AriaComboBoxOptionElement>,
  AriaComboBoxElementEventMap
>('aracna-aria-combobox', AriaComboBoxElement)

export const AracnaAriaComboBoxButton: ElementComponent<AriaComboBoxButtonElement, AriaComboBoxButtonProps> = createBaseElementComponent<
  AriaComboBoxButtonElement,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap
>('aracna-aria-combobox-button', AriaComboBoxButtonElement)

export const AracnaAriaComboBoxGroup: ElementComponent<AriaComboBoxGroupElement, AriaComboBoxGroupProps> = createBaseElementComponent<
  AriaComboBoxGroupElement,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap
>('aracna-aria-combobox-group', AriaComboBoxGroupElement)

export const AracnaAriaComboBoxInput: ElementComponent<AriaComboBoxInputElement, AriaComboBoxInputProps> = createBaseElementComponent<
  AriaComboBoxInputElement,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap
>('aracna-aria-combobox-input', AriaComboBoxInputElement)

export const AracnaAriaComboBoxList: ElementComponent<AriaComboBoxListElement, AriaComboBoxListProps> = createFloatingElementComponent<
  AriaComboBoxListElement,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap
>('aracna-aria-combobox-list', AriaComboBoxListElement)

export const AracnaAriaComboBoxOption: ElementComponent<AriaComboBoxOptionElement, AriaComboBoxOptionProps> = createBaseElementComponent<
  AriaComboBoxOptionElement,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
>('aracna-aria-combobox-option', AriaComboBoxOptionElement)
