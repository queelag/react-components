import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaCardProps } from '../../definitions/props.js'
import type { AracnaCardElementAttributes, AracnaCardElementEventMap } from '@aracna/web-components'
import { AracnaCardElement } from '@aracna/web-components/elements/surface/card-element'

export const AracnaCard: ElementComponent<AracnaCardElement, AracnaCardProps> = createBaseElementComponent<
  AracnaCardElement,
  AracnaCardElementAttributes,
  AracnaCardElementEventMap
>('aracna-card', AracnaCardElement)
