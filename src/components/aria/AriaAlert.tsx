import { AriaAlertProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaAlertElement } from '@queelag/web-components/elements/aria/aria.alert.element'

export const QAriaAlert: ElementComponent<AriaAlertElement, AriaAlertProps> = createElementComponent('q-aria-alert', AriaAlertElement)
