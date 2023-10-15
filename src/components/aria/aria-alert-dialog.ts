import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaAlertDialogProps, AriaAlertDialogDescriptionProps, AriaAlertDialogLabelProps } from '@aracna/react'
import type {
  AriaAlertDialogElementAttributes,
  AriaAlertDialogElementEventMap,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
} from '@aracna/web'
import {
  AriaAlertDialogElement,
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'

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
