import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaMeterProps } from '../../definitions/props.js'
import type { AracnaMeterElementAttributes, AracnaMeterElementEventMap } from '@aracna/web-components'
import { AracnaMeterElement } from '@aracna/web-components/elements/feedback/meter-element'

export const AracnaMeter: ElementComponent<AracnaMeterElement, AracnaAracnaMeterProps> = createBaseElementComponent<
  AracnaMeterElement,
  AracnaMeterElementAttributes,
  AracnaMeterElementEventMap
>('aracna-meter', AracnaMeterElement)
