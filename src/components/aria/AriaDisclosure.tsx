import { AriaDisclosureButtonProps, AriaDisclosurePanelProps, AriaDisclosureProps, AriaDisclosureSectionProps, forwardRef } from '@queelag/preact'
import { AriaDisclosureButtonElement, AriaDisclosureElement, AriaDisclosurePanelElement, AriaDisclosureSectionElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-disclosure': AriaDisclosureProps
      'q-aria-disclosure-button': AriaDisclosureButtonProps
      'q-aria-disclosure-panel': AriaDisclosurePanelProps
      'q-aria-disclosure-section': AriaDisclosureSectionProps
    }
  }
}

export const AriaDisclosure = forwardRef((props: AriaDisclosureProps, ref: Ref<AriaDisclosureElement>) => {
  return <q-aria-disclosure {...props} ref={ref} />
})

export const AriaDisclosureButton = forwardRef((props: AriaDisclosureButtonProps, ref: Ref<AriaDisclosureButtonElement>) => {
  return <q-aria-disclosure-button {...props} ref={ref} />
})

export const AriaDisclosurePanel = forwardRef((props: AriaDisclosurePanelProps, ref: Ref<AriaDisclosurePanelElement>) => {
  return <q-aria-disclosure-panel {...props} ref={ref} />
})

export const AriaDisclosureSection = forwardRef((props: AriaDisclosureSectionProps, ref: Ref<AriaDisclosureSectionElement>) => {
  return <q-aria-disclosure-section {...props} ref={ref} />
})
