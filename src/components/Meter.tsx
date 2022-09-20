import { forwardRef, MeterProps } from '@queelag/preact'
import type { MeterElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-meter': MeterProps
    }
  }
}

export const Meter = forwardRef((props: MeterProps, ref: Ref<MeterElement>) => {
  return <q-meter {...props} ref={ref} />
})
