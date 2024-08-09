import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaSelectProps,
  AracnaAracnaSelectButtonProps,
  AracnaAracnaSelectGroupProps,
  AracnaAracnaSelectInputProps,
  AracnaAracnaSelectListProps,
  AracnaAracnaSelectOptionProps
} from '../../definitions/props.js'
import type {
  AracnaSelectElementAttributes,
  AracnaSelectElementEventMap,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap,
  AracnaSelectGroupElementAttributes,
  AracnaSelectGroupElementEventMap,
  AracnaSelectInputElementAttributes,
  AracnaSelectInputElementEventMap,
  AracnaSelectListElementAttributes,
  AracnaSelectListElementEventMap,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap
} from '@aracna/web-components'
import {
  AracnaSelectElement,
  AracnaSelectButtonElement,
  AracnaSelectGroupElement,
  AracnaSelectInputElement,
  AracnaSelectListElement,
  AracnaSelectOptionElement
} from '@aracna/web-components/elements/input/select-element'

export const AracnaSelect: ElementComponent<AracnaSelectElement, AracnaAracnaSelectProps> = createFloatingElementComponent<
  AracnaSelectElement,
  AracnaSelectElementAttributes<AracnaSelectOptionElement>,
  AracnaSelectElementEventMap
>('aracna-select', AracnaSelectElement, ['combo-box-collapse', 'combo-box-expand'])

export const AracnaSelectButton: ElementComponent<AracnaSelectButtonElement, AracnaAracnaSelectButtonProps> = createBaseElementComponent<
  AracnaSelectButtonElement,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap
>('aracna-select-button', AracnaSelectButtonElement)

export const AracnaSelectGroup: ElementComponent<AracnaSelectGroupElement, AracnaAracnaSelectGroupProps> = createBaseElementComponent<
  AracnaSelectGroupElement,
  AracnaSelectGroupElementAttributes,
  AracnaSelectGroupElementEventMap
>('aracna-select-group', AracnaSelectGroupElement)

export const AracnaSelectInput: ElementComponent<AracnaSelectInputElement, AracnaAracnaSelectInputProps> = createBaseElementComponent<
  AracnaSelectInputElement,
  AracnaSelectInputElementAttributes,
  AracnaSelectInputElementEventMap
>('aracna-select-input', AracnaSelectInputElement)

export const AracnaSelectList: ElementComponent<AracnaSelectListElement, AracnaAracnaSelectListProps> = createBaseElementComponent<
  AracnaSelectListElement,
  AracnaSelectListElementAttributes,
  AracnaSelectListElementEventMap
>('aracna-select-list', AracnaSelectListElement)

export const AracnaSelectOption: ElementComponent<AracnaSelectOptionElement, AracnaAracnaSelectOptionProps> = createBaseElementComponent<
  AracnaSelectOptionElement,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap
>('aracna-select-option', AracnaSelectOptionElement, ['combo-box-option-select'])
