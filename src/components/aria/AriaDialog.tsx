import {
  AriaDialogDescriptionProps,
  AriaDialogLabelProps,
  AriaDialogProps,
  createBaseElementComponent,
  createFocusTrapElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria.dialog.element'

export const AracnaAriaDialog: ElementComponent<AriaDialogElement, AriaDialogProps> = createFocusTrapElementComponent<
  AriaDialogElement,
  AriaDialogElementAttributes,
  AriaDialogElementEventMap
>('aracna-aria-dialog', AriaDialogElement)

export const AracnaAriaDialogDescription: ElementComponent<AriaDialogDescriptionElement, AriaDialogDescriptionProps> = createBaseElementComponent<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>('aracna-aria-dialog-description', AriaDialogDescriptionElement)

export const AracnaAriaDialogLabel: ElementComponent<AriaDialogLabelElement, AriaDialogLabelProps> = createBaseElementComponent<
  AriaDialogLabelElement,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
>('aracna-aria-dialog-label', AriaDialogLabelElement)
