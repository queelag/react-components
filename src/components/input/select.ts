import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { SelectProps, SelectButtonProps, SelectGroupProps, SelectInputProps, SelectListProps, SelectOptionProps } from '@aracna/react'
import type {
  SelectElementAttributes,
  SelectElementEventMap,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap,
  SelectInputElementAttributes,
  SelectInputElementEventMap,
  SelectListElementAttributes,
  SelectListElementEventMap,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap
} from '@aracna/web'
import {
  SelectElement,
  SelectButtonElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@aracna/web-components/elements/input/select-element.js'

export const AracnaSelect: ElementComponent<SelectElement, SelectProps> = createFloatingElementComponent<
  SelectElement,
  SelectElementAttributes<SelectOptionElement>,
  SelectElementEventMap
>('aracna-select', SelectElement)

export const AracnaSelectButton: ElementComponent<SelectButtonElement, SelectButtonProps> = createBaseElementComponent<
  SelectButtonElement,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap
>('aracna-select-button', SelectButtonElement)

export const AracnaSelectGroup: ElementComponent<SelectGroupElement, SelectGroupProps> = createBaseElementComponent<
  SelectGroupElement,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap
>('aracna-select-group', SelectGroupElement)

export const AracnaSelectInput: ElementComponent<SelectInputElement, SelectInputProps> = createBaseElementComponent<
  SelectInputElement,
  SelectInputElementAttributes,
  SelectInputElementEventMap
>('aracna-select-input', SelectInputElement)

export const AracnaSelectList: ElementComponent<SelectListElement, SelectListProps> = createBaseElementComponent<
  SelectListElement,
  SelectListElementAttributes,
  SelectListElementEventMap
>('aracna-select-list', SelectListElement)

export const AracnaSelectOption: ElementComponent<SelectOptionElement, SelectOptionProps> = createBaseElementComponent<
  SelectOptionElement,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap
>('aracna-select-option', SelectOptionElement)
