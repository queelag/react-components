import { createFormFieldElementComponent, ElementComponent, InputProps } from '@queelag/react'
import { InputElement } from '@queelag/web-components/elements/input/input.element.js'

export const QInput: ElementComponent<InputElement, InputProps> = createFormFieldElementComponent('q-input', InputElement)
