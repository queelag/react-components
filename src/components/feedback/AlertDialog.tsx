import { AlertDialogDescriptionProps, AlertDialogLabelProps, AlertDialogProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AlertDialogDescriptionElement, AlertDialogElement, AlertDialogLabelElement } from '@queelag/web-components/elements/feedback/alert.dialog.element'

export const QAlertDialog: ElementComponent<AlertDialogElement, AlertDialogProps> = createElementComponent('q-alert-dialog', AlertDialogElement)

export const QAlertDialogDescription: ElementComponent<AlertDialogDescriptionElement, AlertDialogDescriptionProps> = createElementComponent(
  'q-alert-dialog-description',
  AlertDialogDescriptionElement
)

export const QAlertDialogLabel: ElementComponent<AlertDialogLabelElement, AlertDialogLabelProps> = createElementComponent(
  'q-alert-dialog-label',
  AlertDialogLabelElement
)
