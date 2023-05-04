import { createBaseElementComponent, ElementComponent, NavigationBarItemProps, NavigationBarProps } from '@aracna/react'
import { NavigationBarElementAttributes, NavigationBarElementEventMap, NavigationBarItemElementAttributes, NavigationBarItemElementEventMap } from '@aracna/web'
import { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation.bar.element'

export const AracnaNavigationBar: ElementComponent<NavigationBarElement, NavigationBarProps> = createBaseElementComponent<
  NavigationBarElement,
  NavigationBarElementAttributes,
  NavigationBarElementEventMap
>('aracna-navigation-bar', NavigationBarElement)

export const AracnaNavigationBarItem: ElementComponent<NavigationBarItemElement, NavigationBarItemProps> = createBaseElementComponent<
  NavigationBarItemElement,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
>('aracna-navigation-bar-item', NavigationBarItemElement)
