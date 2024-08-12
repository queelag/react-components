import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaAriaAlertProps } from '../../definitions/props.js'
import type { AracnaAriaAlertElementAttributes, AracnaAriaAlertElementEventMap } from '@aracna/web-components'
import { AracnaAriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

export const AracnaAriaAlert: ElementComponent<AracnaAriaAlertElement, AracnaAriaAlertProps> = createBaseElementComponent<
  AracnaAriaAlertElement,
  AracnaAriaAlertElementAttributes,
  AracnaAriaAlertElementEventMap
>('aracna-aria-alert', AracnaAriaAlertElement)
