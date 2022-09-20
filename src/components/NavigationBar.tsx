import { forwardRef, NavigationBarProps } from '@queelag/preact'
import type { NavigationBarElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-navigation-bar': NavigationBarProps
    }
  }
}

export const NavigationBar = forwardRef((props: NavigationBarProps, ref: Ref<NavigationBarElement>) => {
  return <q-navigation-bar {...props} ref={ref} />
})
