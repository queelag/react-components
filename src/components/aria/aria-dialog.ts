import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaDialogProps, AracnaAracnaAriaDialogDescriptionProps, AracnaAracnaAriaDialogLabelProps } from '../../definitions/props.js'
import type {
  AracnaAriaDialogElementAttributes,
  AracnaAriaDialogElementEventMap,
  AracnaAriaDialogDescriptionElementAttributes,
  AracnaAriaDialogDescriptionElementEventMap,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaDialogElement,
  AracnaAriaDialogDescriptionElement,
  AracnaAriaDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-dialog-element'

export const AracnaAriaDialog: ElementComponent<AracnaAriaDialogElement, AracnaAracnaAriaDialogProps> = createFocusTrapElementComponent<
  AracnaAriaDialogElement,
  AracnaAriaDialogElementAttributes,
  AracnaAriaDialogElementEventMap
>('aracna-aria-dialog', AracnaAriaDialogElement)

export const AracnaAriaDialogDescription: ElementComponent<AracnaAriaDialogDescriptionElement, AracnaAracnaAriaDialogDescriptionProps> =
  createBaseElementComponent<AracnaAriaDialogDescriptionElement, AracnaAriaDialogDescriptionElementAttributes, AracnaAriaDialogDescriptionElementEventMap>(
    'aracna-aria-dialog-description',
    AracnaAriaDialogDescriptionElement
  )

export const AracnaAriaDialogLabel: ElementComponent<AracnaAriaDialogLabelElement, AracnaAracnaAriaDialogLabelProps> = createBaseElementComponent<
  AracnaAriaDialogLabelElement,
  AracnaAriaDialogLabelElementAttributes,
  AracnaAriaDialogLabelElementEventMap
>('aracna-aria-dialog-label', AracnaAriaDialogLabelElement)
