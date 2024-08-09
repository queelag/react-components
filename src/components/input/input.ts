import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaInputProps } from '../../definitions/props.js'
import type { AracnaInputElementAttributes, AracnaInputElementEventMap } from '@aracna/web-components'
import { AracnaInputElement } from '@aracna/web-components/elements/input/input-element'

export const AracnaInput: ElementComponent<AracnaInputElement, AracnaInputProps> = createFormControlElementComponent<
  AracnaInputElement,
  AracnaInputElementAttributes,
  AracnaInputElementEventMap
>('aracna-input', AracnaInputElement)
