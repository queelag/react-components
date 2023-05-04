import { createFormFieldElementComponent, ElementComponent, TextAreaProps } from '@aracna/react'
import { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import { TextAreaElement } from '@aracna/web-components/elements/input/text.area.element.js'

export const AracnaTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createFormFieldElementComponent<
  TextAreaElement,
  TextAreaElementAttributes,
  TextAreaElementEventMap
>('aracna-textarea', TextAreaElement)
