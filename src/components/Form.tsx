import { FormProps, forwardRef } from '@queelag/preact'
import { FormElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-form': FormProps
    }
  }
}

export const Form = forwardRef((props: FormProps, ref: Ref<FormElement>) => {
  return <q-form {...props} ref={ref} />
})
