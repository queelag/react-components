import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaCardProps } from '@aracna/react'
import type { CardElementAttributes, CardElementEventMap } from '@aracna/web'
import { CardElement } from '@aracna/web-components/elements/surface/card-element'

export const AracnaCard: ElementComponent<CardElement, AracnaCardProps> = createBaseElementComponent<CardElement, CardElementAttributes, CardElementEventMap>(
  'aracna-card',
  CardElement
)
