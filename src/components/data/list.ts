import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { ListProps, ListItemProps } from '@aracna/react'
import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import { ListElement, ListItemElement } from '@aracna/web-components/data/list'

export const AracnaList: ElementComponent<ListElement, ListProps> = createBaseElementComponent<ListElement, ListElementAttributes, ListElementEventMap>(
  'aracna-list',
  ListElement
)

export const AracnaListItem: ElementComponent<ListItemElement, ListItemProps> = createBaseElementComponent<
  ListItemElement,
  ListItemElementAttributes,
  ListItemElementEventMap
>('aracna-list-item', ListItemElement)
