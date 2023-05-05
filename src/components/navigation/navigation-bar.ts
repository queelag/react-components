import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { NavigationBarProps, NavigationBarItemProps } from '@aracna/react'
import type {
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
} from '@aracna/web'
import { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/navigation/navigation-bar'

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
