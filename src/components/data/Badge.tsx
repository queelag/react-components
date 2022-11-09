import { BadgeProps, createElementComponent, ElementComponent } from '@queelag/react'
import { BadgeElement } from '@queelag/web-components/elements/data/badge.element'

export const QBadge: ElementComponent<BadgeElement, BadgeProps> = createElementComponent('q-badge', BadgeElement)
