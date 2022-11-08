import { createElementComponent, ElementComponent, NavigationBarItemProps, NavigationBarProps } from '@queelag/react'
import { NavigationBarElement, NavigationBarItemElement } from '@queelag/web-components'

export const QNavigationBar: ElementComponent<NavigationBarElement, NavigationBarProps> = createElementComponent('q-navigation-bar', NavigationBarElement)

export const QNavigationBarItem: ElementComponent<NavigationBarItemElement, NavigationBarItemProps> = createElementComponent(
  'q-navigation-bar-item',
  NavigationBarItemElement
)
