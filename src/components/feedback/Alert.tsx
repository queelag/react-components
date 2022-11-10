import { AlertProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AlertElement } from '@queelag/web-components/elements/feedback/alert.element.js'

export const QAlert: ElementComponent<AlertElement, AlertProps> = createBaseElementComponent('q-alert', AlertElement)
