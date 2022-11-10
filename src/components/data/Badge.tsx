import { BadgeProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { BadgeElement } from '@queelag/web-components/elements/data/badge.element.js'

export const QBadge: ElementComponent<BadgeElement, BadgeProps> = createBaseElementComponent('q-badge', BadgeElement)
