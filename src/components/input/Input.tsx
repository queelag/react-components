import { createFormFieldElementComponent, ElementComponent, InputProps } from '@aracna/react'
import { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import { InputElement } from '@aracna/web-components/elements/input/input.element'

export const AracnaInput: ElementComponent<InputElement, InputProps> = createFormFieldElementComponent<
  InputElement,
  InputElementAttributes,
  InputElementEventMap
>('aracna-input', InputElement)
