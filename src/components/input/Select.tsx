import {
  createBaseElementComponent,
  createFloatingElementComponent,
  createFormFieldElementComponent,
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

export const QSelect: ElementComponent<SelectElement, SelectProps> = createFormFieldElementComponent('q-select', SelectElement)
export const QSelectButton: ElementComponent<SelectButtonElement, SelectButtonProps> = createBaseElementComponent('q-select-button', SelectButtonElement)
export const QSelectGroup: ElementComponent<SelectGroupElement, SelectGroupProps> = createBaseElementComponent('q-select-group', SelectGroupElement)
export const QSelectInput: ElementComponent<SelectInputElement, SelectInputProps> = createBaseElementComponent('q-select-input', SelectInputElement)
export const QSelectList: ElementComponent<SelectListElement, SelectListProps> = createFloatingElementComponent('q-select-list', SelectListElement)
export const QSelectOption: ElementComponent<SelectOptionElement, SelectOptionProps> = createBaseElementComponent('q-select-option', SelectOptionElement)
