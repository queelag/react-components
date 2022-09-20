import { DividerProps, forwardRef } from '@queelag/preact'
import type { DividerElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-divider': DividerProps
    }
  }
}

export const Divider = forwardRef((props: DividerProps, ref: Ref<DividerElement>) => {
  return <q-divider {...props} ref={ref} />
})
