import type { ElementComponent, ListItemProps, ListProps } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element'

export const AracnaList: ElementComponent<ListElement, ListProps> = createBaseElementComponent<ListElement, ListElementAttributes, ListElementEventMap>(
  'aracna-list',
  ListElement
)

export const AracnaListItem: ElementComponent<ListItemElement, ListItemProps> = createBaseElementComponent<
  ListItemElement,
  ListItemElementAttributes,
  ListItemElementEventMap
>('aracna-list-item', ListItemElement)
