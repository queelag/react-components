import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAlertProps } from '../../definitions/props.js'
import type { AracnaAlertElementAttributes, AracnaAlertElementEventMap } from '@aracna/web-components'
import { AracnaAlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export const AracnaAlert: ElementComponent<AracnaAlertElement, AracnaAlertProps> = createBaseElementComponent<
  AracnaAlertElement,
  AracnaAlertElementAttributes,
  AracnaAlertElementEventMap
>('aracna-alert', AracnaAlertElement)
