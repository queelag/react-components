import { AvatarProps, forwardRef } from '@queelag/preact'
import type { AvatarElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-avatar': AvatarProps
    }
  }
}

export const Avatar = forwardRef((props: AvatarProps, ref: Ref<AvatarElement>) => {
  return <q-avatar {...props} ref={ref} />
})
