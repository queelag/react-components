import { AriaAlertProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaAlertElement } from '@queelag/web-components/elements/aria/aria.alert.element.js'

export const QAriaAlert: ElementComponent<AriaAlertElement, AriaAlertProps> = createBaseElementComponent('q-aria-alert', AriaAlertElement)
