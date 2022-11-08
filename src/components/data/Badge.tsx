import { BadgeProps, createElementComponent, ElementComponent } from '@queelag/react'
import { BadgeElement } from '@queelag/web-components'

export const QBadge: ElementComponent<BadgeElement, BadgeProps> = createElementComponent('q-badge', BadgeElement)
