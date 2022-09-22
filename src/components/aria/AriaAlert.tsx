import { AriaAlertProps, forwardRef } from '@queelag/preact'
import type { AriaAlertElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-alert': AriaAlertProps
    }
  }
}

export const AriaAlert = forwardRef((props: AriaAlertProps, ref: Ref<AriaAlertElement>) => {
  return <q-aria-alert {...props} ref={ref} />
})
