import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaMeterProps } from '@aracna/react'
import type { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import { AriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'

export const AracnaAriaMeter: ElementComponent<AriaMeterElement, AracnaAriaMeterProps> = createBaseElementComponent<
  AriaMeterElement,
  AriaMeterElementAttributes,
  AriaMeterElementEventMap
>('aracna-aria-meter', AriaMeterElement)
