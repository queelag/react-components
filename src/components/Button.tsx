import { ButtonProps, forwardRef } from '@queelag/preact'
import { ButtonElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-button': ButtonProps
    }
  }
}

export const Button = forwardRef((props: ButtonProps, ref: Ref<ButtonElement>) => {
  return <q-button {...props} ref={ref} />
})
