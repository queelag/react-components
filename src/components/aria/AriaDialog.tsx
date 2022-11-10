import {
  AriaDialogDescriptionProps,
  AriaDialogLabelProps,
  AriaDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@queelag/react'
import { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@queelag/web-components/elements/aria/aria.dialog.element.js'

export const QAriaDialog: ElementComponent<AriaDialogElement, AriaDialogProps> = createFocusTrapElementComponent('q-aria-dialog', AriaDialogElement)

export const QAriaDialogDescription: ElementComponent<AriaDialogDescriptionElement, AriaDialogDescriptionProps> = createBaseElementComponent(
  'q-aria-dialog-description',
  AriaDialogDescriptionElement
)

export const QAriaDialogLabel: ElementComponent<AriaDialogLabelElement, AriaDialogLabelProps> = createBaseElementComponent(
  'q-aria-dialog-label',
  AriaDialogLabelElement
)
