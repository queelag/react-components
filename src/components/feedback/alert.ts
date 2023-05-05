import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AlertProps } from '@aracna/react'
import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import { AlertElement } from '@aracna/web-components/feedback/alert'

export const AracnaAlert: ElementComponent<AlertElement, AlertProps> = createBaseElementComponent<AlertElement, AlertElementAttributes, AlertElementEventMap>(
  'aracna-alert',
  AlertElement
)
