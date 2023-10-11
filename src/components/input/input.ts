import type { ElementComponent, InputProps } from '@aracna/react'
import { createFormFieldElementComponent } from '@aracna/react'
import type { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import { InputElement } from '@aracna/web-components/elements/input/input-element'

export const AracnaInput: ElementComponent<InputElement, InputProps> = createFormFieldElementComponent<
  InputElement,
  InputElementAttributes,
  InputElementEventMap
>('aracna-input', InputElement)
