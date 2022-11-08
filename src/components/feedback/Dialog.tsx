import { createElementComponent, DialogDescriptionProps, DialogLabelProps, DialogProps, ElementComponent } from '@queelag/react'
import { DialogDescriptionElement, DialogElement, DialogLabelElement } from '@queelag/web-components'

export const QDialog: ElementComponent<DialogElement, DialogProps> = createElementComponent('q-dialog', DialogElement)

export const QDialogDescription: ElementComponent<DialogDescriptionElement, DialogDescriptionProps> = createElementComponent(
  'q-dialog-description',
  DialogDescriptionElement
)

export const QDialogLabel: ElementComponent<DialogLabelElement, DialogLabelProps> = createElementComponent('q-dialog-label', DialogLabelElement)
