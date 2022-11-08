import { AlertProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AlertElement } from '@queelag/web-components'

export const QAlert: ElementComponent<AlertElement, AlertProps> = createElementComponent('q-alert', AlertElement)
