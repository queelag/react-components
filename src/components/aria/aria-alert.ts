import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaAlertProps } from '../../definitions/props.js'
import type { AracnaAriaAlertElementAttributes, AracnaAriaAlertElementEventMap } from '@aracna/web-components'
import { AracnaAriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

export const AracnaAracnaAriaAlert: ElementComponent<AracnaAriaAlertElement, AracnaAracnaAriaAlertProps> = createBaseElementComponent<
  AracnaAriaAlertElement,
  AracnaAriaAlertElementAttributes,
  AracnaAriaAlertElementEventMap
>('aracna-aria-alert', AracnaAriaAlertElement)
