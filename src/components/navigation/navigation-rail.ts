import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaNavigationRailProps, AracnaAracnaNavigationRailItemProps } from '../../definitions/props.js'
import type {
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
} from '@aracna/web-components'
import { AracnaNavigationRailElement, AracnaNavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'

export const AracnaNavigationRail: ElementComponent<AracnaNavigationRailElement, AracnaAracnaNavigationRailProps> = createBaseElementComponent<
  AracnaNavigationRailElement,
  AracnaNavigationRailElementAttributes,
  AracnaNavigationRailElementEventMap
>('aracna-navigation-rail', AracnaNavigationRailElement)

export const AracnaNavigationRailItem: ElementComponent<AracnaNavigationRailItemElement, AracnaAracnaNavigationRailItemProps> = createBaseElementComponent<
  AracnaNavigationRailItemElement,
  AracnaNavigationRailItemElementAttributes,
  AracnaNavigationRailItemElementEventMap
>('aracna-navigation-rail-item', AracnaNavigationRailItemElement)
