import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { BadgeProps } from '@aracna/react'
import type { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import { BadgeElement } from '@aracna/web-components/elements/data/badge-element.js'

export const AracnaBadge: ElementComponent<BadgeElement, BadgeProps> = createBaseElementComponent<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>(
  'aracna-badge',
  BadgeElement
)
