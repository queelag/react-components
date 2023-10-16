import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAlertProps } from '@aracna/react'
import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import { AlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export const AracnaAlert: ElementComponent<AlertElement, AracnaAlertProps> = createBaseElementComponent<
  AlertElement,
  AlertElementAttributes,
  AlertElementEventMap
>('aracna-alert', AlertElement)
