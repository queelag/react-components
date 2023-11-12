import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaInputProps } from '@aracna/react'
import type { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import { InputElement } from '@aracna/web-components/elements/input/input-element'

export const AracnaInput: ElementComponent<InputElement, AracnaInputProps> = createFormControlElementComponent<
  InputElement,
  InputElementAttributes,
  InputElementEventMap
>('aracna-input', InputElement)
