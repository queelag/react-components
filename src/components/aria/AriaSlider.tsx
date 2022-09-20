import { AriaSliderProps, AriaSliderThumbProps, forwardRef } from '@queelag/preact'
import type { AriaSliderElement, AriaSliderThumbElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-slider': AriaSliderProps
      'q-aria-slider-thumb': AriaSliderThumbProps
    }
  }
}

export const AriaSlider = forwardRef((props: AriaSliderProps, ref: Ref<AriaSliderElement>) => {
  return <q-aria-slider {...props} ref={ref} />
})

export const AriaSliderThumb = forwardRef((props: AriaSliderThumbProps, ref: Ref<AriaSliderThumbElement>) => {
  return <q-aria-slider-thumb {...props} ref={ref} />
})
