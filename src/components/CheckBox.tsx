import { CheckBoxProps, forwardRef } from '@queelag/preact'
import { CheckBoxElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-checkbox': CheckBoxProps
    }
  }
}

export const CheckBox = forwardRef((props: CheckBoxProps, ref: Ref<CheckBoxElement>) => {
  return <q-checkbox {...props} ref={ref} />
})
