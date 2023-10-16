import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaTextAreaProps } from '@aracna/react'
import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element'

export const AracnaTextArea: ElementComponent<TextAreaElement, AracnaTextAreaProps> = createFormFieldElementComponent<
  TextAreaElement,
  TextAreaElementAttributes,
  TextAreaElementEventMap
>('aracna-textarea', TextAreaElement)
