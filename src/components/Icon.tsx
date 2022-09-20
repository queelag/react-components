import { forwardRef, IconProps } from '@queelag/preact'
import type { IconElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-icon': IconProps
    }
  }
}

export const Icon = forwardRef((props: IconProps, ref: Ref<IconElement>) => {
  return <q-icon {...props} ref={ref} />
})
