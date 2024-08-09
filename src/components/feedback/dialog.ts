import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaDialogProps, AracnaAracnaDialogDescriptionProps, AracnaAracnaDialogLabelProps } from '../../definitions/props.js'
import type {
  AracnaDialogElementAttributes,
  AracnaDialogElementEventMap,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap,
  AracnaDialogLabelElementAttributes,
  AracnaDialogLabelElementEventMap
} from '@aracna/web-components'
import { AracnaDialogElement, AracnaDialogDescriptionElement, AracnaDialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'

export const AracnaDialog: ElementComponent<AracnaDialogElement, AracnaAracnaDialogProps> = createFocusTrapElementComponent<
  AracnaDialogElement,
  AracnaDialogElementAttributes,
  AracnaDialogElementEventMap
>('aracna-dialog', AracnaDialogElement, ['dialog-close', 'dialog-open'])

export const AracnaDialogDescription: ElementComponent<AracnaDialogDescriptionElement, AracnaAracnaDialogDescriptionProps> = createBaseElementComponent<
  AracnaDialogDescriptionElement,
  AracnaDialogDescriptionElementAttributes,
  AracnaDialogDescriptionElementEventMap
>('aracna-dialog-description', AracnaDialogDescriptionElement)

export const AracnaDialogLabel: ElementComponent<AracnaDialogLabelElement, AracnaAracnaDialogLabelProps> = createBaseElementComponent<
  AracnaDialogLabelElement,
  AracnaDialogLabelElementAttributes,
  AracnaDialogLabelElementEventMap
>('aracna-dialog-label', AracnaDialogLabelElement)
