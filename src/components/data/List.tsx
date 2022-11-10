import { createBaseElementComponent, ElementComponent, ListItemProps, ListProps } from '@queelag/react'
import { ListElement, ListItemElement } from '@queelag/web-components/elements/data/list.element.js'

export const QList: ElementComponent<ListElement, ListProps> = createBaseElementComponent('q-list', ListElement)
export const QListItem: ElementComponent<ListItemElement, ListItemProps> = createBaseElementComponent('q-list-item', ListItemElement)
