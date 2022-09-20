import { BadgeProps, forwardRef } from '@queelag/preact'
import type { BadgeElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-badge': BadgeProps
    }
  }
}

export const Badge = forwardRef((props: BadgeProps, ref: Ref<BadgeElement>) => {
  return <q-badge {...props} ref={ref} />
})
