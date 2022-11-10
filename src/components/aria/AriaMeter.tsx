import { AriaMeterProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaMeterElement } from '@queelag/web-components/elements/aria/aria.meter.element.js'

export const QAriaMeter: ElementComponent<AriaMeterElement, AriaMeterProps> = createBaseElementComponent('q-aria-meter', AriaMeterElement)
