import { createElementComponent, ElementComponent, MeterProps } from '@queelag/react'
import { MeterElement } from '@queelag/web-components'

export const QMeter: ElementComponent<MeterElement, MeterProps> = createElementComponent('q-meter', MeterElement)
