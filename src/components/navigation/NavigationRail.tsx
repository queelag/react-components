import { createBaseElementComponent, ElementComponent, NavigationRailItemProps, NavigationRailProps } from '@aracna/react'
import {
  NavigationRailElementAttributes,
  NavigationRailElementEventMap,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
} from '@aracna/web'
import { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation.rail.element.js'

export const AracnaNavigationRail: ElementComponent<NavigationRailElement, NavigationRailProps> = createBaseElementComponent<
  NavigationRailElement,
  NavigationRailElementAttributes,
  NavigationRailElementEventMap
>('aracna-navigation-rail', NavigationRailElement)

export const AracnaNavigationRailItem: ElementComponent<NavigationRailItemElement, NavigationRailItemProps> = createBaseElementComponent<
  NavigationRailItemElement,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
>('aracna-navigation-rail-item', NavigationRailItemElement)
