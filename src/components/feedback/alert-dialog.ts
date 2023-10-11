import type { AlertDialogDescriptionProps, AlertDialogLabelProps, AlertDialogProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type {
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
} from '@aracna/web'
import { AlertDialogDescriptionElement, AlertDialogElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert-dialog-element'

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
