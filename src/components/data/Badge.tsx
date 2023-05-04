import { BadgeProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import { BadgeElement } from '@aracna/web-components/elements/data/badge.element.js'

export const AracnaBadge: ElementComponent<BadgeElement, BadgeProps> = createBaseElementComponent<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>(
  'aracna-badge',
  BadgeElement
)
