import { createElementComponent, ElementComponent, TextAreaProps } from '@queelag/react'
import { TextAreaElement } from '@queelag/web-components'

export const QTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createElementComponent('q-textarea', TextAreaElement)
