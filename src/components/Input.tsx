import { forwardRef, InputProps } from '@queelag/preact'
import { InputElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-input': InputProps
    }
  }
}

export const Input = forwardRef((props: InputProps, ref: Ref<InputElement>) => {
  return <q-input {...props} ref={ref} />
})
