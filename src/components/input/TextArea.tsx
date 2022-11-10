import { createFormFieldElementComponent, ElementComponent, TextAreaProps } from '@queelag/react'
import { TextAreaElement } from '@queelag/web-components/elements/input/text.area.element.js'

export const QTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createFormFieldElementComponent('q-textarea', TextAreaElement)
