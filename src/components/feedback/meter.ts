import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaMeterProps } from '../../definitions/props.js'
import type { AracnaMeterElementAttributes, AracnaMeterElementEventMap } from '@aracna/web-components'
import { AracnaMeterElement } from '@aracna/web-components/elements/feedback/meter-element'

export const AracnaMeter: ElementComponent<AracnaMeterElement, AracnaMeterProps> = createBaseElementComponent<
  AracnaMeterElement,
  AracnaMeterElementAttributes,
  AracnaMeterElementEventMap
>('aracna-meter', AracnaMeterElement)
