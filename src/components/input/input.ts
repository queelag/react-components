import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaInputProps, AracnaInputClearProps, AracnaInputObscureProps, AracnaInputItemRemoveProps } from '../../definitions/props.js'
import type {
  AracnaInputElementAttributes,
  AracnaInputElementEventMap,
  AracnaInputClearElementAttributes,
  AracnaInputClearElementEventMap,
  AracnaInputObscureElementAttributes,
  AracnaInputObscureElementEventMap,
  AracnaInputItemRemoveElementAttributes,
  AracnaInputItemRemoveElementEventMap
} from '@aracna/web-components'
import {
  AracnaInputElement,
  AracnaInputClearElement,
  AracnaInputObscureElement,
  AracnaInputItemRemoveElement
} from '@aracna/web-components/elements/input/input-element'

export const AracnaInput: ElementComponent<AracnaInputElement, AracnaInputProps> = createFormControlElementComponent<
  AracnaInputElement,
  AracnaInputElementAttributes,
  AracnaInputElementEventMap
>('aracna-input', AracnaInputElement, ['input-change'])

export const AracnaInputClear: ElementComponent<AracnaInputClearElement, AracnaInputClearProps> = createBaseElementComponent<
  AracnaInputClearElement,
  AracnaInputClearElementAttributes,
  AracnaInputClearElementEventMap
>('aracna-input-clear', AracnaInputClearElement)

export const AracnaInputObscure: ElementComponent<AracnaInputObscureElement, AracnaInputObscureProps> = createBaseElementComponent<
  AracnaInputObscureElement,
  AracnaInputObscureElementAttributes,
  AracnaInputObscureElementEventMap
>('aracna-input-obscure', AracnaInputObscureElement)

export const AracnaInputItemRemove: ElementComponent<AracnaInputItemRemoveElement, AracnaInputItemRemoveProps> = createBaseElementComponent<
  AracnaInputItemRemoveElement,
  AracnaInputItemRemoveElementAttributes,
  AracnaInputItemRemoveElementEventMap
>('aracna-input-item-remove', AracnaInputItemRemoveElement)
