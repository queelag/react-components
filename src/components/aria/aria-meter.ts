import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaMeterProps } from '../../definitions/props.js'
import type { AracnaAriaMeterElementAttributes, AracnaAriaMeterElementEventMap } from '@aracna/web-components'
import { AracnaAriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'

export const AracnaAracnaAriaMeter: ElementComponent<AracnaAriaMeterElement, AracnaAracnaAriaMeterProps> = createBaseElementComponent<
  AracnaAriaMeterElement,
  AracnaAriaMeterElementAttributes,
  AracnaAriaMeterElementEventMap
>('aracna-aria-meter', AracnaAriaMeterElement)
