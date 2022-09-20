import { AriaMenuBarItemProps, AriaMenuBarProps, AriaMenuBarSubMenuProps, forwardRef } from '@queelag/preact'
import type { AriaMenuBarElement, AriaMenuBarItemElement, AriaMenuBarSubMenuElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-menubar': AriaMenuBarProps
      'q-aria-menubar-item': AriaMenuBarItemProps
      'q-aria-menubar-submenu': AriaMenuBarSubMenuProps
    }
  }
}

export const AriaMenuBar = forwardRef((props: AriaMenuBarProps, ref: Ref<AriaMenuBarElement>) => {
  return <q-aria-menubar {...props} ref={ref} />
})

export const AriaMenuBarItem = forwardRef((props: AriaMenuBarItemProps, ref: Ref<AriaMenuBarItemElement>) => {
  return <q-aria-menubar-item {...props} ref={ref} />
})

export const AriaMenuBarSubMenu = forwardRef((props: AriaMenuBarSubMenuProps, ref: Ref<AriaMenuBarSubMenuElement>) => {
  return <q-aria-menubar-submenu {...props} ref={ref} />
})
