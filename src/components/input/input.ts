import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaInputProps } from '../../definitions/props.js'
import type { AracnaInputElementAttributes, AracnaInputElementEventMap } from '@aracna/web-components'
import { AracnaInputElement } from '@aracna/web-components/elements/input/input-element'

export const AracnaInput: ElementComponent<AracnaInputElement, AracnaInputProps> = createFormControlElementComponent<
  AracnaInputElement,
  AracnaInputElementAttributes,
  AracnaInputElementEventMap
>('aracna-input', AracnaInputElement)
