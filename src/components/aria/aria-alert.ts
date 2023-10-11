import type { AriaAlertProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

export const AracnaAriaAlert: ElementComponent<AriaAlertElement, AriaAlertProps> = createBaseElementComponent<
  AriaAlertElement,
  AriaAlertElementAttributes,
  AriaAlertElementEventMap
>('aracna-aria-alert', AriaAlertElement)
