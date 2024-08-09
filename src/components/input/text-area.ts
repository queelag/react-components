import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaTextAreaProps } from '../../definitions/props.js'
import type { AracnaTextAreaElementAttributes, AracnaTextAreaElementEventMap } from '@aracna/web-components'
import { AracnaTextAreaElement } from '@aracna/web-components/elements/input/text-area-element'

export const AracnaTextArea: ElementComponent<AracnaTextAreaElement, AracnaTextAreaProps> = createFormControlElementComponent<
  AracnaTextAreaElement,
  AracnaTextAreaElementAttributes,
  AracnaTextAreaElementEventMap
>('aracna-textarea', AracnaTextAreaElement)
