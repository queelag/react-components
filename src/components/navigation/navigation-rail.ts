import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaNavigationRailProps, AracnaNavigationRailItemProps } from '../../definitions/props.js'
import type {
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
} from '@aracna/web-components'
import { AracnaNavigationRailElement, AracnaNavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'

export const AracnaNavigationRail: ElementComponent<AracnaNavigationRailElement, AracnaNavigationRailProps> = createBaseElementComponent<
  AracnaNavigationRailElement,
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap
>('aracna-navigation-rail', AracnaNavigationRailElement)

export const AracnaNavigationRailItem: ElementComponent<AracnaNavigationRailItemElement, AracnaNavigationRailItemProps> = createBaseElementComponent<
  AracnaNavigationRailItemElement,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
>('aracna-navigation-rail-item', AracnaNavigationRailItemElement)
