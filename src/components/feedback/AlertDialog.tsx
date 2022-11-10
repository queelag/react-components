import {
  AlertDialogDescriptionProps,
  AlertDialogLabelProps,
  AlertDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@queelag/react'
import { AlertDialogDescriptionElement, AlertDialogElement, AlertDialogLabelElement } from '@queelag/web-components/elements/feedback/alert.dialog.element.js'

export const QAlertDialog: ElementComponent<AlertDialogElement, AlertDialogProps> = createFocusTrapElementComponent('q-alert-dialog', AlertDialogElement)

export const QAlertDialogDescription: ElementComponent<AlertDialogDescriptionElement, AlertDialogDescriptionProps> = createBaseElementComponent(
  'q-alert-dialog-description',
  AlertDialogDescriptionElement
)

export const QAlertDialogLabel: ElementComponent<AlertDialogLabelElement, AlertDialogLabelProps> = createBaseElementComponent(
  'q-alert-dialog-label',
  AlertDialogLabelElement
)
