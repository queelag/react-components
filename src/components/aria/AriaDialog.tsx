import { AriaDialogDescriptionProps, AriaDialogLabelProps, AriaDialogProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@queelag/web-components'

export const QAriaDialog: ElementComponent<AriaDialogElement, AriaDialogProps> = createElementComponent('q-aria-dialog', AriaDialogElement)

export const QAriaDialogDescription: ElementComponent<AriaDialogDescriptionElement, AriaDialogDescriptionProps> = createElementComponent(
  'q-aria-dialog-description',
  AriaDialogDescriptionElement
)

export const QAriaDialogLabel: ElementComponent<AriaDialogLabelElement, AriaDialogLabelProps> = createElementComponent(
  'q-aria-dialog-label',
  AriaDialogLabelElement
)
