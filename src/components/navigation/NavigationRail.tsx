import { createBaseElementComponent, ElementComponent, NavigationRailItemProps, NavigationRailProps } from '@queelag/react'
import { NavigationRailElement, NavigationRailItemElement } from '@queelag/web-components/elements/navigation/navigation.rail.element.js'

export const QNavigationRail: ElementComponent<NavigationRailElement, NavigationRailProps> = createBaseElementComponent(
  'q-navigation-rail',
  NavigationRailElement
)

export const QNavigationRailItem: ElementComponent<NavigationRailItemElement, NavigationRailItemProps> = createBaseElementComponent(
  'q-navigation-rail-item',
  NavigationRailItemElement
)
