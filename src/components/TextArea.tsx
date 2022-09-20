import { forwardRef, TextAreaProps } from '@queelag/preact'
import type { TextAreaElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-textarea': TextAreaProps
    }
  }
}

export const TextArea = forwardRef((props: TextAreaProps, ref: Ref<TextAreaElement>) => {
  return <q-textarea {...props} ref={ref} />
})
