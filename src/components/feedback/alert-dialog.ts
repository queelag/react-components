import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAlertDialogProps, AracnaAracnaAlertDialogDescriptionProps, AracnaAracnaAlertDialogLabelProps } from '../../definitions/props.js'
import type {
  AracnaAlertDialogElementAttributes,
  AracnaAlertDialogElementEventMap,
  AracnaAlertDialogDescriptionElementAttributes,
  AracnaAlertDialogDescriptionElementEventMap,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap
} from '@aracna/web-components'
import {
  AracnaAlertDialogElement,
  AracnaAlertDialogDescriptionElement,
  AracnaAlertDialogLabelElement
} from '@aracna/web-components/elements/feedback/alert-dialog-element'

export const AracnaAlertDialog: ElementComponent<AracnaAlertDialogElement, AracnaAracnaAlertDialogProps> = createFocusTrapElementComponent<
  AracnaAlertDialogElement,
  AracnaAlertDialogElementAttributes,
  AracnaAlertDialogElementEventMap
>('aracna-alert-dialog', AracnaAlertDialogElement, ['dialog-close', 'dialog-open'])

export const AracnaAlertDialogDescription: ElementComponent<AracnaAlertDialogDescriptionElement, AracnaAracnaAlertDialogDescriptionProps> =
  createBaseElementComponent<AracnaAlertDialogDescriptionElement, AracnaAlertDialogDescriptionElementAttributes, AracnaAlertDialogDescriptionElementEventMap>(
    'aracna-alert-dialog-description',
    AracnaAlertDialogDescriptionElement
  )

export const AracnaAlertDialogLabel: ElementComponent<AracnaAlertDialogLabelElement, AracnaAracnaAlertDialogLabelProps> = createBaseElementComponent<
  AracnaAlertDialogLabelElement,
  AracnaAlertDialogLabelElementAttributes,
  AracnaAlertDialogLabelElementEventMap
>('aracna-alert-dialog-label', AracnaAlertDialogLabelElement)
