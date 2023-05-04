import {
  AriaAlertDialogDescriptionProps,
  AriaAlertDialogLabelProps,
  AriaAlertDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap,
  AriaAlertDialogElementAttributes,
  AriaAlertDialogElementEventMap,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
} from '@aracna/web'
import {
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogElement,
  AriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria.alert.dialog.element'

export const AracnaAriaAlertDialog: ElementComponent<AriaAlertDialogElement, AriaAlertDialogProps> = createFocusTrapElementComponent<
  AriaAlertDialogElement,
  AriaAlertDialogElementAttributes,
  AriaAlertDialogElementEventMap
>('aracna-aria-alert-dialog', AriaAlertDialogElement)

export const AracnaAriaAlertDialogDescription: ElementComponent<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionProps> =
  createBaseElementComponent<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionElementAttributes, AriaAlertDialogDescriptionElementEventMap>(
    'aracna-aria-alert-dialog-description',
    AriaAlertDialogDescriptionElement
  )

export const AracnaAriaAlertDialogLabel: ElementComponent<AriaAlertDialogLabelElement, AriaAlertDialogLabelProps> = createBaseElementComponent<
  AriaAlertDialogLabelElement,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
>('aracna-aria-alert-dialog-label', AriaAlertDialogLabelElement)
