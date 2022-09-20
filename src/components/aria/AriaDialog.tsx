import { AriaDialogDescriptionProps, AriaDialogLabelProps, AriaDialogProps, forwardRef } from '@queelag/preact'
import type { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-dialog': AriaDialogProps
      'q-aria-dialog-description': AriaDialogDescriptionProps
      'q-aria-dialog-label': AriaDialogLabelProps
    }
  }
}

export const AriaDialog = forwardRef((props: AriaDialogProps, ref: Ref<AriaDialogElement>) => {
  return <q-aria-dialog {...props} ref={ref} />
})

export const AriaDialogDescription = forwardRef((props: AriaDialogDescriptionProps, ref: Ref<AriaDialogDescriptionElement>) => {
  return <q-aria-dialog-description {...props} ref={ref} />
})

export const AriaDialogLabel = forwardRef((props: AriaDialogLabelProps, ref: Ref<AriaDialogLabelElement>) => {
  return <q-aria-dialog-label {...props} ref={ref} />
})
