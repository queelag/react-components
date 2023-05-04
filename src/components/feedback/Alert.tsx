import { AlertProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import { AlertElement } from '@aracna/web-components/elements/feedback/alert.element.js'

export const AracnaAlert: ElementComponent<AlertElement, AlertProps> = createBaseElementComponent<AlertElement, AlertElementAttributes, AlertElementEventMap>(
  'aracna-alert',
  AlertElement
)
