import { createBaseElementComponent, ElementComponent, MeterProps } from '@queelag/react'
import { MeterElement } from '@queelag/web-components/elements/feedback/meter.element.js'

export const QMeter: ElementComponent<MeterElement, MeterProps> = createBaseElementComponent('q-meter', MeterElement)
