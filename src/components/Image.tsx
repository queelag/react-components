import { forwardRef, ImageProps } from '@queelag/preact'
import { ImageElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-image': ImageProps
    }
  }
}

export const Image = forwardRef((props: ImageProps, ref: Ref<ImageElement>) => {
  return <q-image {...props} ref={ref} />
})
