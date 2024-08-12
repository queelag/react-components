import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFocusTrapElementComponent } from '../../functions/create-focus-trap-element-component.js'
import type { AracnaAriaAlertDialogProps, AracnaAriaAlertDialogDescriptionProps, AracnaAriaAlertDialogLabelProps } from '../../definitions/props.js'
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

export const AracnaAriaAlertDialog: ElementComponent<AracnaAriaAlertDialogElement, AracnaAriaAlertDialogProps> = createFocusTrapElementComponent<
  AracnaAriaAlertDialogElement,
  AracnaAriaAlertDialogElementAttributes,
  AracnaAriaAlertDialogElementEventMap
>('aracna-aria-alert-dialog', AracnaAriaAlertDialogElement)

export const AracnaAriaAlertDialogDescription: ElementComponent<AracnaAriaAlertDialogDescriptionElement, AracnaAriaAlertDialogDescriptionProps> =
  createBaseElementComponent<
    AracnaAriaAlertDialogDescriptionElement,
    AracnaAriaAlertDialogDescriptionElementAttributes,
    AracnaAriaAlertDialogDescriptionElementEventMap
  >('aracna-aria-alert-dialog-description', AracnaAriaAlertDialogDescriptionElement)

export const AracnaAriaAlertDialogLabel: ElementComponent<AracnaAriaAlertDialogLabelElement, AracnaAriaAlertDialogLabelProps> = createBaseElementComponent<
  AracnaAriaAlertDialogLabelElement,
  AracnaAriaAlertDialogLabelElementAttributes,
  AracnaAriaAlertDialogLabelElementEventMap
>('aracna-aria-alert-dialog-label', AracnaAriaAlertDialogLabelElement)
