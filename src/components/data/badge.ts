import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaBadgeProps } from '@aracna/react'
import type { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import { BadgeElement } from '@aracna/web-components/elements/data/badge-element'

export const AracnaBadge: ElementComponent<BadgeElement, AracnaBadgeProps> = createBaseElementComponent<
  BadgeElement,
  BadgeElementAttributes,
  BadgeElementEventMap
>('aracna-badge', BadgeElement)
