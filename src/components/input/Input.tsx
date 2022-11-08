import { createElementComponent, ElementComponent, InputProps } from '@queelag/react'
import { InputElement } from '@queelag/web-components'

export const QInput: ElementComponent<InputElement, InputProps> = createElementComponent('q-input', InputElement)
