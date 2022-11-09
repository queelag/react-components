import { createElementComponent, ElementComponent, InputProps } from '@queelag/react'
import { InputElement } from '@queelag/web-components/elements/input/input.element'

export const QInput: ElementComponent<InputElement, InputProps> = createElementComponent('q-input', InputElement)
