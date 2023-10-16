import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaListProps, AracnaListItemProps } from '@aracna/react'
import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element'

export const AracnaList: ElementComponent<ListElement, AracnaListProps> = createBaseElementComponent<ListElement, ListElementAttributes, ListElementEventMap>(
  'aracna-list',
  ListElement
)

export const AracnaListItem: ElementComponent<ListItemElement, AracnaListItemProps> = createBaseElementComponent<
  ListItemElement,
  ListItemElementAttributes,
  ListItemElementEventMap
>('aracna-list-item', ListItemElement)
