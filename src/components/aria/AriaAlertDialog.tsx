import { AriaAlertDialogDescriptionProps, AriaAlertDialogLabelProps, AriaAlertDialogProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaAlertDialogDescriptionElement, AriaAlertDialogElement, AriaAlertDialogLabelElement } from '@queelag/web-components'

export const QAriaAlertDialog: ElementComponent<AriaAlertDialogElement, AriaAlertDialogProps> = createElementComponent(
  'q-aria-alert-dialog',
  AriaAlertDialogElement
)

export const QAriaAlertDialogDescription: ElementComponent<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionProps> = createElementComponent(
  'q-aria-alert-dialog-description',
  AriaAlertDialogDescriptionElement
)

export const QAriaAlertDialogLabel: ElementComponent<AriaAlertDialogLabelElement, AriaAlertDialogLabelProps> = createElementComponent(
  'q-aria-alert-dialog-label',
  AriaAlertDialogLabelElement
)
