import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaTextAreaProps, AracnaTextAreaClearProps, AracnaTextAreaItemRemoveProps } from '../../definitions/props.js'
import type {
  AracnaTextAreaElementAttributes,
  AracnaTextAreaElementEventMap,
  AracnaTextAreaClearElementAttributes,
  AracnaTextAreaClearElementEventMap,
  AracnaTextAreaItemRemoveElementAttributes,
  AracnaTextAreaItemRemoveElementEventMap
} from '@aracna/web-components'
import { AracnaTextAreaElement, AracnaTextAreaClearElement, AracnaTextAreaItemRemoveElement } from '@aracna/web-components/elements/input/text-area-element'

export const AracnaTextArea: ElementComponent<AracnaTextAreaElement, AracnaTextAreaProps> = createFormControlElementComponent<
  AracnaTextAreaElement,
  AracnaTextAreaElementAttributes,
  AracnaTextAreaElementEventMap
>('aracna-textarea', AracnaTextAreaElement)

export const AracnaTextAreaClear: ElementComponent<AracnaTextAreaClearElement, AracnaTextAreaClearProps> = createBaseElementComponent<
  AracnaTextAreaClearElement,
  AracnaTextAreaClearElementAttributes,
  AracnaTextAreaClearElementEventMap
>('aracna-textarea-clear', AracnaTextAreaClearElement)

export const AracnaTextAreaItemRemove: ElementComponent<AracnaTextAreaItemRemoveElement, AracnaTextAreaItemRemoveProps> = createBaseElementComponent<
  AracnaTextAreaItemRemoveElement,
  AracnaTextAreaItemRemoveElementAttributes,
  AracnaTextAreaItemRemoveElementEventMap
>('aracna-textarea-item-remove', AracnaTextAreaItemRemoveElement)
