import { AriaAlertDialogDescriptionProps, AriaAlertDialogLabelProps, AriaAlertDialogProps, forwardRef } from '@queelag/preact'
import type { AriaAlertDialogDescriptionElement, AriaAlertDialogElement, AriaAlertDialogLabelElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-alert-dialog': AriaAlertDialogProps
      'q-aria-alert-dialog-description': AriaAlertDialogDescriptionProps
      'q-aria-alert-dialog-label': AriaAlertDialogLabelProps
    }
  }
}

export const AriaAlertDialog = forwardRef((props: AriaAlertDialogProps, ref: Ref<AriaAlertDialogElement>) => {
  return <q-aria-alert-dialog {...props} ref={ref} />
})

export const AriaAlertDialogDescription = forwardRef((props: AriaAlertDialogDescriptionProps, ref: Ref<AriaAlertDialogDescriptionElement>) => {
  return <q-aria-alert-dialog-description {...props} ref={ref} />
})

export const AriaAlertDialogLabel = forwardRef((props: AriaAlertDialogLabelProps, ref: Ref<AriaAlertDialogLabelElement>) => {
  return <q-aria-alert-dialog-label {...props} ref={ref} />
})
