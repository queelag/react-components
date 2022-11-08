import { createElementComponent, ElementComponent, ListItemProps, ListProps } from '@queelag/react'
import { ListElement, ListItemElement } from '@queelag/web-components'

export const QList: ElementComponent<ListElement, ListProps> = createElementComponent('q-list', ListElement)
export const QListItem: ElementComponent<ListItemElement, ListItemProps> = createElementComponent('q-list-item', ListItemElement)
