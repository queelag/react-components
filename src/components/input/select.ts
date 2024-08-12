import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type {
  AracnaSelectProps,
  AracnaSelectButtonProps,
  AracnaSelectGroupProps,
  AracnaSelectInputProps,
  AracnaSelectListProps,
  AracnaSelectOptionProps
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

export const AracnaSelect: ElementComponent<AracnaSelectElement, AracnaSelectProps> = createFormControlElementComponent<
  AracnaSelectElement,
  AracnaSelectElementAttributes<AracnaSelectOptionElement>,
  AracnaSelectElementEventMap
>('aracna-select', AracnaSelectElement, ['collapse', 'expand'])

export const AracnaSelectButton: ElementComponent<AracnaSelectButtonElement, AracnaSelectButtonProps> = createBaseElementComponent<
  AracnaSelectButtonElement,
  AracnaSelectButtonElementAttributes,
  AracnaSelectButtonElementEventMap
>('aracna-select-button', AracnaSelectButtonElement)

export const AracnaSelectGroup: ElementComponent<AracnaSelectGroupElement, AracnaSelectGroupProps> = createBaseElementComponent<
  AracnaSelectGroupElement,
  AracnaSelectGroupElementAttributes,
  AracnaSelectGroupElementEventMap
>('aracna-select-group', AracnaSelectGroupElement)

export const AracnaSelectInput: ElementComponent<AracnaSelectInputElement, AracnaSelectInputProps> = createBaseElementComponent<
  AracnaSelectInputElement,
  AracnaSelectInputElementAttributes,
  AracnaSelectInputElementEventMap
>('aracna-select-input', AracnaSelectInputElement)

export const AracnaSelectList: ElementComponent<AracnaSelectListElement, AracnaSelectListProps> = createFloatingElementComponent<
  AracnaSelectListElement,
  AracnaSelectListElementAttributes,
  AracnaSelectListElementEventMap
>('aracna-select-list', AracnaSelectListElement)

export const AracnaSelectOption: ElementComponent<AracnaSelectOptionElement, AracnaSelectOptionProps> = createBaseElementComponent<
  AracnaSelectOptionElement,
  AracnaSelectOptionElementAttributes,
  AracnaSelectOptionElementEventMap
>('aracna-select-option', AracnaSelectOptionElement, ['select', 'unselect'])
