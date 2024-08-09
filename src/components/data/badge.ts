import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaBadgeProps } from '../../definitions/props.js'
import type { AracnaBadgeElementAttributes, AracnaBadgeElementEventMap } from '@aracna/web-components'
import { AracnaBadgeElement } from '@aracna/web-components/elements/data/badge-element'

export const AracnaAracnaBadge: ElementComponent<AracnaBadgeElement, AracnaAracnaBadgeProps> = createBaseElementComponent<
  AracnaBadgeElement,
  AracnaBadgeElementAttributes,
  AracnaBadgeElementEventMap
>('aracna-badge', AracnaBadgeElement)
