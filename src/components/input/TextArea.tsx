import { createElementComponent, ElementComponent, TextAreaProps } from '@queelag/react'
import { TextAreaElement } from '@queelag/web-components/elements/input/text.area.element'

export const QTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createElementComponent('q-textarea', TextAreaElement)
