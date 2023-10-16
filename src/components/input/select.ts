import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaSelectProps,
  AracnaSelectButtonProps,
  AracnaSelectGroupProps,
  AracnaSelectInputProps,
  AracnaSelectListProps,
  AracnaSelectOptionProps
} from '@aracna/react'
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
} from '@aracna/web-components/elements/input/select-element'

export const AracnaSelect: ElementComponent<SelectElement, AracnaSelectProps> = createFloatingElementComponent<
  SelectElement,
  SelectElementAttributes<SelectOptionElement>,
  SelectElementEventMap
>('aracna-select', SelectElement)

export const AracnaSelectButton: ElementComponent<SelectButtonElement, AracnaSelectButtonProps> = createBaseElementComponent<
  SelectButtonElement,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap
>('aracna-select-button', SelectButtonElement)

export const AracnaSelectGroup: ElementComponent<SelectGroupElement, AracnaSelectGroupProps> = createBaseElementComponent<
  SelectGroupElement,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap
>('aracna-select-group', SelectGroupElement)

export const AracnaSelectInput: ElementComponent<SelectInputElement, AracnaSelectInputProps> = createBaseElementComponent<
  SelectInputElement,
  SelectInputElementAttributes,
  SelectInputElementEventMap
>('aracna-select-input', SelectInputElement)

export const AracnaSelectList: ElementComponent<SelectListElement, AracnaSelectListProps> = createBaseElementComponent<
  SelectListElement,
  SelectListElementAttributes,
  SelectListElementEventMap
>('aracna-select-list', SelectListElement)

export const AracnaSelectOption: ElementComponent<SelectOptionElement, AracnaSelectOptionProps> = createBaseElementComponent<
  SelectOptionElement,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap
>('aracna-select-option', SelectOptionElement)
