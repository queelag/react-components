import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaNavigationBarProps, AracnaNavigationBarItemProps } from '../../definitions/props.js'
import type {
  AracnaNavigationBarElementAttributes,
  AracnaNavigationBarElementEventMap,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap
} from '@aracna/web-components'
import { AracnaNavigationBarElement, AracnaNavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'

export const AracnaNavigationBar: ElementComponent<AracnaNavigationBarElement, AracnaNavigationBarProps> = createBaseElementComponent<
  AracnaNavigationBarElement,
  AracnaNavigationBarElementAttributes,
  AracnaNavigationBarElementEventMap
>('aracna-navigation-bar', AracnaNavigationBarElement)

export const AracnaNavigationBarItem: ElementComponent<AracnaNavigationBarItemElement, AracnaNavigationBarItemProps> = createBaseElementComponent<
  AracnaNavigationBarItemElement,
  AracnaNavigationBarItemElementAttributes,
  AracnaNavigationBarItemElementEventMap
>('aracna-navigation-bar-item', AracnaNavigationBarItemElement)
