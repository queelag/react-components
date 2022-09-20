import { forwardRef, InputFileProps } from '@queelag/preact'
import { InputFileElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-inputfile': InputFileProps
    }
  }
}

export const InputFile = forwardRef((props: InputFileProps, ref: Ref<InputFileElement>) => {
  return <q-inputfile {...props} ref={ref} />
})
