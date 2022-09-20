import { forwardRef, SelectProps } from '@queelag/preact'
import type { SelectElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-select': SelectProps
    }
  }
}

export const Select = forwardRef((props: SelectProps, ref: Ref<SelectElement>) => {
  return <q-select {...props} ref={ref} />
})
