import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaMeterProps } from '@aracna/react'
import type { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import { AriaMeterElement } from '@aracna/web-components/aria/aria-meter'

export const AracnaAriaMeter: ElementComponent<AriaMeterElement, AriaMeterProps> = createBaseElementComponent<
  AriaMeterElement,
  AriaMeterElementAttributes,
  AriaMeterElementEventMap
>('aracna-aria-meter', AriaMeterElement)
