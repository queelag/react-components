import type { AlertProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import { AlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export const AracnaAlert: ElementComponent<AlertElement, AlertProps> = createBaseElementComponent<AlertElement, AlertElementAttributes, AlertElementEventMap>(
  'aracna-alert',
  AlertElement
)
