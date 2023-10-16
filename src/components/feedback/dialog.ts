import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaDialogProps, AracnaDialogDescriptionProps, AracnaDialogLabelProps } from '@aracna/react'
import type {
  DialogElementAttributes,
  DialogElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
} from '@aracna/web'
import { DialogElement, DialogDescriptionElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'

export const AracnaDialog: ElementComponent<DialogElement, AracnaDialogProps> = createFocusTrapElementComponent<
  DialogElement,
  DialogElementAttributes,
  DialogElementEventMap
>('aracna-dialog', DialogElement)

export const AracnaDialogDescription: ElementComponent<DialogDescriptionElement, AracnaDialogDescriptionProps> = createBaseElementComponent<
  DialogDescriptionElement,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap
>('aracna-dialog-description', DialogDescriptionElement)

export const AracnaDialogLabel: ElementComponent<DialogLabelElement, AracnaDialogLabelProps> = createBaseElementComponent<
  DialogLabelElement,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
>('aracna-dialog-label', DialogLabelElement)
