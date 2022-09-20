import { forwardRef, SwitchProps } from '@queelag/preact'
import type { SwitchElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-switch': SwitchProps
    }
  }
}

export const Switch = forwardRef((props: SwitchProps, ref: Ref<SwitchElement>) => {
  return <q-switch {...props} ref={ref} />
})
