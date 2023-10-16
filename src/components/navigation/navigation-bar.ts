import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaNavigationBarProps, AracnaNavigationBarItemProps } from '@aracna/react'
import type {
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
} from '@aracna/web'
import { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'

export const AracnaNavigationBar: ElementComponent<NavigationBarElement, AracnaNavigationBarProps> = createBaseElementComponent<
  NavigationBarElement,
  NavigationBarElementAttributes,
  NavigationBarElementEventMap
>('aracna-navigation-bar', NavigationBarElement)

export const AracnaNavigationBarItem: ElementComponent<NavigationBarItemElement, AracnaNavigationBarItemProps> = createBaseElementComponent<
  NavigationBarItemElement,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
>('aracna-navigation-bar-item', NavigationBarItemElement)
