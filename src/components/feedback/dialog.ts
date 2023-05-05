import { createBaseElementComponent, createFocusTrapElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { DialogProps, DialogDescriptionProps, DialogLabelProps } from '@aracna/react'
import type {
  DialogElementAttributes,
  DialogElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
} from '@aracna/web'
import { DialogElement, DialogDescriptionElement, DialogLabelElement } from '@aracna/web-components/feedback/dialog'

export const AracnaDialog: ElementComponent<DialogElement, DialogProps> = createFocusTrapElementComponent<
  DialogElement,
  DialogElementAttributes,
  DialogElementEventMap
>('aracna-dialog', DialogElement)

export const AracnaDialogDescription: ElementComponent<DialogDescriptionElement, DialogDescriptionProps> = createBaseElementComponent<
  DialogDescriptionElement,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap
>('aracna-dialog-description', DialogDescriptionElement)

export const AracnaDialogLabel: ElementComponent<DialogLabelElement, DialogLabelProps> = createBaseElementComponent<
  DialogLabelElement,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
>('aracna-dialog-label', DialogLabelElement)
