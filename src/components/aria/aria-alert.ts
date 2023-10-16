import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaAlertProps } from '@aracna/react'
import type { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

export const AracnaAriaAlert: ElementComponent<AriaAlertElement, AracnaAriaAlertProps> = createBaseElementComponent<
  AriaAlertElement,
  AriaAlertElementAttributes,
  AriaAlertElementEventMap
>('aracna-aria-alert', AriaAlertElement)
