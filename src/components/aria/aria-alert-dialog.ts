import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaAlertDialogProps,
  AracnaAracnaAriaAlertDialogDescriptionProps,
  AracnaAracnaAriaAlertDialogLabelProps
} from '../../definitions/props.js'
import type {
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap,
  AracnaAriaAlertDialogDescriptionElementAttributes,
  AracnaAriaAlertDialogDescriptionElementEventMap,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogDescriptionElement,
  AracnaAriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'

export const AracnaAracnaAriaAlertDialog: ElementComponent<AracnaAriaAlertDialogElement, AracnaAracnaAriaAlertDialogProps> = createFocusTrapElementComponent<
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap
>('aracna-aria-alert-dialog', AracnaAriaAlertDialogElement)

export const AracnaAracnaAriaAlertDialogDescription: ElementComponent<AracnaAriaAlertDialogDescriptionElement, AracnaAracnaAriaAlertDialogDescriptionProps> =
  createBaseElementComponent<
    AracnaAriaAlertDialogDescriptionElement,
    AracnaAriaAlertDialogDescriptionElementAttributes,
    AracnaAriaAlertDialogDescriptionElementEventMap
  >('aracna-aria-alert-dialog-description', AracnaAriaAlertDialogDescriptionElement)

export const AracnaAracnaAriaAlertDialogLabel: ElementComponent<AracnaAriaAlertDialogLabelElement, AracnaAracnaAriaAlertDialogLabelProps> =
  createBaseElementComponent<AracnaAriaAlertDialogLabelElement, AracnaAriaAlertDialogLabelElementAttributes, AracnaAriaAlertDialogLabelElementEventMap>(
    'aracna-aria-alert-dialog-label',
    AracnaAriaAlertDialogLabelElement
  )
