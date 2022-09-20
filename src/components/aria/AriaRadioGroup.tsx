import { AriaRadioButtonProps, AriaRadioGroupProps, forwardRef } from '@queelag/preact'
import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-radio-button': AriaRadioButtonProps
      'q-aria-radio-group': AriaRadioGroupProps
    }
  }
}

export const AriaRadioButton = forwardRef((props: AriaRadioButtonProps, ref: Ref<AriaRadioButtonElement>) => {
  return <q-aria-radio-button {...props} ref={ref} />
})

export const AriaRadioGroup = forwardRef((props: AriaRadioGroupProps, ref: Ref<AriaRadioGroupElement>) => {
  return <q-aria-radio-group {...props} ref={ref} />
})
