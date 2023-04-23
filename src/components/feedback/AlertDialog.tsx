import {
  AlertDialogDescriptionProps,
  AlertDialogLabelProps,
  AlertDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
} from '@aracna/web'
import { AlertDialogDescriptionElement, AlertDialogElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert.dialog.element.js'

export const AracnaAlertDialog: ElementComponent<AlertDialogElement, AlertDialogProps> = createFocusTrapElementComponent<
  AlertDialogElement,
  AlertDialogElementAttributes,
  AlertDialogElementEventMap
>('aracna-alert-dialog', AlertDialogElement)

export const AracnaAlertDialogDescription: ElementComponent<AlertDialogDescriptionElement, AlertDialogDescriptionProps> = createBaseElementComponent<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>('aracna-alert-dialog-description', AlertDialogDescriptionElement)

export const AracnaAlertDialogLabel: ElementComponent<AlertDialogLabelElement, AlertDialogLabelProps> = createBaseElementComponent<
  AlertDialogLabelElement,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
>('aracna-alert-dialog-label', AlertDialogLabelElement)
