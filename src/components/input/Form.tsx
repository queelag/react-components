import { createBaseElementComponent, ElementComponent, FormProps } from '@aracna/react'
import { FormElementAttributes, FormElementEventMap } from '@aracna/web'
import { FormElement } from '@aracna/web-components/elements/input/form.element'

export const AracnaForm: ElementComponent<FormElement, FormProps> = createBaseElementComponent<FormElement, FormElementAttributes, FormElementEventMap>(
  'aracna-form',
  FormElement,
  ['form-submit']
)
