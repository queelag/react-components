import { forwardRef, ListItemProps, ListProps } from '@queelag/preact'
import type { ListElement, ListItemElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-list': ListProps
      'q-list-item': ListItemProps
    }
  }
}

export const List = forwardRef((props: ListProps, ref: Ref<ListElement>) => {
  return <q-list {...props} ref={ref} />
})

export const ListItem = forwardRef((props: ListItemProps, ref: Ref<ListItemElement>) => {
  return <q-list-item {...props} ref={ref} />
})
