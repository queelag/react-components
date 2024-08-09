import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaListProps, AracnaListItemProps } from '../../definitions/props.js'
import type {
  AracnaListElementAttributes,
  AracnaListElementEventMap,
  AracnaListItemElementAttributes,
  AracnaListItemElementEventMap
} from '@aracna/web-components'
import { AracnaListElement, AracnaListItemElement } from '@aracna/web-components/elements/data/list-element'

export const AracnaList: ElementComponent<AracnaListElement, AracnaListProps> = createBaseElementComponent<
  AracnaListElement,
  AracnaListElementAttributes,
  AracnaListElementEventMap
>('aracna-list', AracnaListElement)

export const AracnaListItem: ElementComponent<AracnaListItemElement, AracnaListItemProps> = createBaseElementComponent<
  AracnaListItemElement,
  AracnaListItemElementAttributes,
  AracnaListItemElementEventMap
>('aracna-list-item', AracnaListItemElement)
