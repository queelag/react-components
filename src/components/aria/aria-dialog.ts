import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaDialogProps, AracnaAriaDialogDescriptionProps, AracnaAriaDialogLabelProps } from '@aracna/react'
import type {
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import { AriaDialogElement, AriaDialogDescriptionElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria-dialog-element'

export const AracnaAriaDialog: ElementComponent<AriaDialogElement, AracnaAriaDialogProps> = createFocusTrapElementComponent<
  AriaDialogElement,
  AriaDialogElementAttributes,
  AriaDialogElementEventMap
>('aracna-aria-dialog', AriaDialogElement)

export const AracnaAriaDialogDescription: ElementComponent<AriaDialogDescriptionElement, AracnaAriaDialogDescriptionProps> = createBaseElementComponent<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>('aracna-aria-dialog-description', AriaDialogDescriptionElement)

export const AracnaAriaDialogLabel: ElementComponent<AriaDialogLabelElement, AracnaAriaDialogLabelProps> = createBaseElementComponent<
  AriaDialogLabelElement,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
>('aracna-aria-dialog-label', AriaDialogLabelElement)
