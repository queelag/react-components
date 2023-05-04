import { AriaMeterProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import { AriaMeterElement } from '@aracna/web-components/elements/aria/aria.meter.element'

export const AracnaAriaMeter: ElementComponent<AriaMeterElement, AriaMeterProps> = createBaseElementComponent<
  AriaMeterElement,
  AriaMeterElementAttributes,
  AriaMeterElementEventMap
>('aracna-aria-meter', AriaMeterElement)
