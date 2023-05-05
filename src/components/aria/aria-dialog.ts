import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaDialogProps, AriaDialogDescriptionProps, AriaDialogLabelProps } from '@aracna/react'
import type {
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import { AriaDialogElement, AriaDialogDescriptionElement, AriaDialogLabelElement } from '@aracna/web-components/aria/aria-dialog'

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
