import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { MeterProps } from '@aracna/react'
import type { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import { MeterElement } from '@aracna/web-components/elements/feedback/meter-element.js'

export const AracnaMeter: ElementComponent<MeterElement, MeterProps> = createBaseElementComponent<MeterElement, MeterElementAttributes, MeterElementEventMap>(
  'aracna-meter',
  MeterElement
)
