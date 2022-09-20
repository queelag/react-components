import { ChipProps, forwardRef } from '@queelag/preact'
import type { ChipElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-chip': ChipProps
    }
  }
}

export const Chip = forwardRef((props: ChipProps, ref: Ref<ChipElement>) => {
  return <q-chip {...props} ref={ref} />
})
