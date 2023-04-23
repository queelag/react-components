import { createBaseElementComponent, ElementComponent, MeterProps } from '@aracna/react'
import { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import { MeterElement } from '@aracna/web-components/elements/feedback/meter.element.js'

export const AracnaMeter: ElementComponent<MeterElement, MeterProps> = createBaseElementComponent<MeterElement, MeterElementAttributes, MeterElementEventMap>(
  'aracna-meter',
  MeterElement
)
