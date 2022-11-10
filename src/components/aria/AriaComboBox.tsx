import {
  AriaComboBoxButtonProps,
  AriaComboBoxGroupProps,
  AriaComboBoxInputProps,
  AriaComboBoxListProps,
  AriaComboBoxOptionProps,
  AriaComboBoxProps,
  createBaseElementComponent,
  createFloatingElementComponent,
  createFormFieldElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@queelag/web-components/elements/aria/aria.combo.box.element.js'

export const QAriaComboBox: ElementComponent<AriaComboBoxElement, AriaComboBoxProps> = createFormFieldElementComponent('q-aria-combobox', AriaComboBoxElement)

export const QAriaComboBoxButton: ElementComponent<AriaComboBoxButtonElement, AriaComboBoxButtonProps> = createBaseElementComponent(
  'q-aria-combobox-button',
  AriaComboBoxButtonElement
)

export const QAriaComboBoxGroup: ElementComponent<AriaComboBoxGroupElement, AriaComboBoxGroupProps> = createBaseElementComponent(
  'q-aria-combobox-group',
  AriaComboBoxGroupElement
)

export const QAriaComboBoxInput: ElementComponent<AriaComboBoxInputElement, AriaComboBoxInputProps> = createBaseElementComponent(
  'q-aria-combobox-input',
  AriaComboBoxInputElement
)

export const QAriaComboBoxList: ElementComponent<AriaComboBoxListElement, AriaComboBoxListProps> = createFloatingElementComponent(
  'q-aria-combobox-list',
  AriaComboBoxListElement
)

export const QAriaComboBoxOption: ElementComponent<AriaComboBoxOptionElement, AriaComboBoxOptionProps> = createBaseElementComponent(
  'q-aria-combobox-option',
  AriaComboBoxOptionElement
)
