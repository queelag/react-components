import { AriaMenuButtonProps, AriaMenuItemProps, AriaMenuListProps, AriaMenuProps, forwardRef } from '@queelag/preact'
import { AriaMenuButtonElement, AriaMenuElement, AriaMenuItemElement, AriaMenuListElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-menu': AriaMenuProps
      'q-aria-menu-button': AriaMenuButtonProps
      'q-aria-menu-item': AriaMenuItemProps
      'q-aria-menu-list': AriaMenuListProps
    }
  }
}

export const AriaMenu = forwardRef((props: AriaMenuProps, ref: Ref<AriaMenuElement>) => {
  return <q-aria-menu {...props} ref={ref} />
})

export const AriaMenuButton = forwardRef((props: AriaMenuButtonProps, ref: Ref<AriaMenuButtonElement>) => {
  return <q-aria-menu-button {...props} ref={ref} />
})

export const AriaMenuItem = forwardRef((props: AriaMenuItemProps, ref: Ref<AriaMenuItemElement>) => {
  return <q-aria-menu-item {...props} ref={ref} />
})

export const AriaMenuList = forwardRef((props: AriaMenuListProps, ref: Ref<AriaMenuListElement>) => {
  return <q-aria-menu-list {...props} ref={ref} />
})
