import {
  AriaComboBoxButtonProps,
  AriaComboBoxGroupProps,
  AriaComboBoxInputProps,
  AriaComboBoxListProps,
  AriaComboBoxOptionProps,
  AriaComboBoxProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@queelag/web-components'

export const QAriaComboBox: ElementComponent<AriaComboBoxElement, AriaComboBoxProps> = createElementComponent('q-aria-combobox', AriaComboBoxElement)

export const QAriaComboBoxButton: ElementComponent<AriaComboBoxButtonElement, AriaComboBoxButtonProps> = createElementComponent(
  'q-aria-combobox-button',
  AriaComboBoxButtonElement
)

export const QAriaComboBoxGroup: ElementComponent<AriaComboBoxGroupElement, AriaComboBoxGroupProps> = createElementComponent(
  'q-aria-combobox-group',
  AriaComboBoxGroupElement
)

export const QAriaComboBoxInput: ElementComponent<AriaComboBoxInputElement, AriaComboBoxInputProps> = createElementComponent(
  'q-aria-combobox-input',
  AriaComboBoxInputElement
)

export const QAriaComboBoxList: ElementComponent<AriaComboBoxListElement, AriaComboBoxListProps> = createElementComponent(
  'q-aria-combobox-list',
  AriaComboBoxListElement
)

export const QAriaComboBoxOption: ElementComponent<AriaComboBoxOptionElement, AriaComboBoxOptionProps> = createElementComponent(
  'q-aria-combobox-option',
  AriaComboBoxOptionElement
)
