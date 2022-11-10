import {
  createBaseElementComponent,
  createFocusTrapElementComponent,
  DialogDescriptionProps,
  DialogLabelProps,
  DialogProps,
  ElementComponent
} from '@queelag/react'
import { DialogDescriptionElement, DialogElement, DialogLabelElement } from '@queelag/web-components/elements/feedback/dialog.element.js'

export const QDialog: ElementComponent<DialogElement, DialogProps> = createFocusTrapElementComponent('q-dialog', DialogElement)

export const QDialogDescription: ElementComponent<DialogDescriptionElement, DialogDescriptionProps> = createBaseElementComponent(
  'q-dialog-description',
  DialogDescriptionElement
)

export const QDialogLabel: ElementComponent<DialogLabelElement, DialogLabelProps> = createBaseElementComponent('q-dialog-label', DialogLabelElement)
