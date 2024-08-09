import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAlertProps } from '../../definitions/props.js'
import type { AracnaAlertElementAttributes, AracnaAlertElementEventMap } from '@aracna/web-components'
import { AracnaAlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export const AracnaAlert: ElementComponent<AracnaAlertElement, AracnaAracnaAlertProps> = createBaseElementComponent<
  AracnaAlertElement,
  AracnaAlertElementAttributes,
  AracnaAlertElementEventMap
>('aracna-alert', AracnaAlertElement)
