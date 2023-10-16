import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaMeterProps } from '@aracna/react'
import type { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import { MeterElement } from '@aracna/web-components/elements/feedback/meter-element'

export const AracnaMeter: ElementComponent<MeterElement, AracnaMeterProps> = createBaseElementComponent<
  MeterElement,
  MeterElementAttributes,
  MeterElementEventMap
>('aracna-meter', MeterElement)
