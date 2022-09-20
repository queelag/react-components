import {
  AriaAccordionButtonProps,
  AriaAccordionHeaderProps,
  AriaAccordionPanelProps,
  AriaAccordionProps,
  AriaAccordionSectionProps,
  forwardRef
} from '@queelag/preact'
import {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-accordion': AriaAccordionProps
      'q-aria-accordion-button': AriaAccordionButtonProps
      'q-aria-accordion-header': AriaAccordionHeaderProps
      'q-aria-accordion-panel': AriaAccordionPanelProps
      'q-aria-accordion-section': AriaAccordionSectionProps
    }
  }
}

export const AriaAccordion = forwardRef((props: AriaAccordionProps, ref: Ref<AriaAccordionElement>) => {
  return <q-aria-accordion {...props} ref={ref} />
})

export const AriaAccordionButton = forwardRef((props: AriaAccordionButtonProps, ref: Ref<AriaAccordionButtonElement>) => {
  return <q-aria-accordion-button {...props} ref={ref} />
})

export const AriaAccordionHeader = forwardRef((props: AriaAccordionHeaderProps, ref: Ref<AriaAccordionHeaderElement>) => {
  return <q-aria-accordion-header {...props} ref={ref} />
})

export const AriaAccordionPanel = forwardRef((props: AriaAccordionPanelProps, ref: Ref<AriaAccordionPanelElement>) => {
  return <q-aria-accordion-panel {...props} ref={ref} />
})

export const AriaAccordionSection = forwardRef((props: AriaAccordionSectionProps, ref: Ref<AriaAccordionSectionElement>) => {
  return <q-aria-accordion-section {...props} ref={ref} />
})
