import {
  createElementComponent,
  ElementComponent,
  SelectButtonProps,
  SelectGroupProps,
  SelectInputProps,
  SelectListProps,
  SelectOptionProps,
  SelectProps
} from '@queelag/react'
import {
  SelectButtonElement,
  SelectElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@queelag/web-components/elements/input/select.element.js'

export const QSelect: ElementComponent<SelectElement, SelectProps> = createElementComponent('q-select', SelectElement)
export const QSelectButton: ElementComponent<SelectButtonElement, SelectButtonProps> = createElementComponent('q-select-button', SelectButtonElement)
export const QSelectGroup: ElementComponent<SelectGroupElement, SelectGroupProps> = createElementComponent('q-select-group', SelectGroupElement)
export const QSelectInput: ElementComponent<SelectInputElement, SelectInputProps> = createElementComponent('q-select-input', SelectInputElement)
export const QSelectList: ElementComponent<SelectListElement, SelectListProps> = createElementComponent('q-select-list', SelectListElement)
export const QSelectOption: ElementComponent<SelectOptionElement, SelectOptionProps> = createElementComponent('q-select-option', SelectOptionElement)
