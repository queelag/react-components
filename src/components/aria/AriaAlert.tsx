import { AriaAlertProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import { AriaAlertElement } from '@aracna/web-components/elements/aria/aria.alert.element.js'

export const AracnaAriaAlert: ElementComponent<AriaAlertElement, AriaAlertProps> = createBaseElementComponent<
  AriaAlertElement,
  AriaAlertElementAttributes,
  AriaAlertElementEventMap
>('aracna-aria-alert', AriaAlertElement)
