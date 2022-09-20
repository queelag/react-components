import { forwardRef, NavigationRailProps } from '@queelag/preact'
import type { NavigationRailElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-navigation-rail': NavigationRailProps
    }
  }
}

export const NavigationRail = forwardRef((props: NavigationRailProps, ref: Ref<NavigationRailElement>) => {
  return <q-navigation-rail {...props} ref={ref} />
})
