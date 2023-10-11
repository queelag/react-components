import type { ElementComponent, TextAreaProps } from '@aracna/react'
import { createFormFieldElementComponent } from '@aracna/react'
import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element'

export const AracnaTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createFormFieldElementComponent<
  TextAreaElement,
  TextAreaElementAttributes,
  TextAreaElementEventMap
>('aracna-textarea', TextAreaElement)
