import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAlertDialogProps, AracnaAlertDialogDescriptionProps, AracnaAlertDialogLabelProps } from '@aracna/react'
import type {
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
} from '@aracna/web'
import { AlertDialogElement, AlertDialogDescriptionElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert-dialog-element'

export const AracnaAlertDialog: ElementComponent<AlertDialogElement, AracnaAlertDialogProps> = createFocusTrapElementComponent<
  AlertDialogElement,
  AlertDialogElementAttributes,
  AlertDialogElementEventMap
>('aracna-alert-dialog', AlertDialogElement)

export const AracnaAlertDialogDescription: ElementComponent<AlertDialogDescriptionElement, AracnaAlertDialogDescriptionProps> = createBaseElementComponent<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>('aracna-alert-dialog-description', AlertDialogDescriptionElement)

export const AracnaAlertDialogLabel: ElementComponent<AlertDialogLabelElement, AracnaAlertDialogLabelProps> = createBaseElementComponent<
  AlertDialogLabelElement,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
>('aracna-alert-dialog-label', AlertDialogLabelElement)
