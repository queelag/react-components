import {
  createBaseElementComponent,
  createFocusTrapElementComponent,
  DialogDescriptionProps,
  DialogLabelProps,
  DialogProps,
  ElementComponent
} from '@aracna/react'
import {
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogElementAttributes,
  DialogElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
} from '@aracna/web'
import { DialogDescriptionElement, DialogElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog.element'

export const AracnaDialog: ElementComponent<DialogElement, DialogProps> = createFocusTrapElementComponent<
  DialogElement,
  DialogElementAttributes,
  DialogElementEventMap
>('aracna-dialog', DialogElement)

export const AracnaDialogDescription: ElementComponent<DialogDescriptionElement, DialogDescriptionProps> = createBaseElementComponent<
  DialogDescriptionElement,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap
>('aracna-dialog-description', DialogDescriptionElement)

export const AracnaDialogLabel: ElementComponent<DialogLabelElement, DialogLabelProps> = createBaseElementComponent<
  DialogLabelElement,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
>('aracna-dialog-label', DialogLabelElement)
