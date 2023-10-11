import type { ElementComponent, FormProps } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { FormElementAttributes, FormElementEventMap } from '@aracna/web'
import { FormElement } from '@aracna/web-components/elements/input/form-element'

export const AracnaForm: ElementComponent<FormElement, FormProps> = createBaseElementComponent<FormElement, FormElementAttributes, FormElementEventMap>(
  'aracna-form',
  FormElement
)
