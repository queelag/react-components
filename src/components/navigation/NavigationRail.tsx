import { createElementComponent, ElementComponent, NavigationRailItemProps, NavigationRailProps } from '@queelag/react'
import { NavigationRailElement, NavigationRailItemElement } from '@queelag/web-components/elements/navigation/navigation.rail.element'

export const QNavigationRail: ElementComponent<NavigationRailElement, NavigationRailProps> = createElementComponent('q-navigation-rail', NavigationRailElement)

export const QNavigationRailItem: ElementComponent<NavigationRailItemElement, NavigationRailItemProps> = createElementComponent(
  'q-navigation-rail-item',
  NavigationRailItemElement
)
