import {
  AriaAlertDialogDescriptionProps,
  AriaAlertDialogLabelProps,
  AriaAlertDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogElement,
  AriaAlertDialogLabelElement
} from '@queelag/web-components/elements/aria/aria.alert.dialog.element.js'

export const QAriaAlertDialog: ElementComponent<AriaAlertDialogElement, AriaAlertDialogProps> = createFocusTrapElementComponent(
  'q-aria-alert-dialog',
  AriaAlertDialogElement
)

export const QAriaAlertDialogDescription: ElementComponent<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionProps> = createBaseElementComponent(
  'q-aria-alert-dialog-description',
  AriaAlertDialogDescriptionElement
)

export const QAriaAlertDialogLabel: ElementComponent<AriaAlertDialogLabelElement, AriaAlertDialogLabelProps> = createBaseElementComponent(
  'q-aria-alert-dialog-label',
  AriaAlertDialogLabelElement
)
