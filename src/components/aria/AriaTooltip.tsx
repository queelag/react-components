import { AriaTooltipArrowProps, AriaTooltipContentProps, AriaTooltipProps, AriaTooltipTriggerProps, forwardRef } from '@queelag/preact'
import type { AriaTooltipArrowElement, AriaTooltipContentElement, AriaTooltipElement, AriaTooltipTriggerElement } from '@queelag/web-components'
import { h, Ref } from 'preact'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-tooltip': AriaTooltipProps
      'q-aria-tooltip-arrow': AriaTooltipArrowProps
      'q-aria-tooltip-content': AriaTooltipContentProps
      'q-aria-tooltip-trigger': AriaTooltipTriggerProps
    }
  }
}

export const AriaTooltip = forwardRef((props: AriaTooltipProps, ref: Ref<AriaTooltipElement>) => {
  return <q-aria-tooltip {...props} ref={ref} />
})

export const AriaTooltipArrow = forwardRef((props: AriaTooltipArrowProps, ref: Ref<AriaTooltipArrowElement>) => {
  return <q-aria-tooltip-arrow {...props} ref={ref} />
})

export const AriaTooltipContent = forwardRef((props: AriaTooltipContentProps, ref: Ref<AriaTooltipContentElement>) => {
  return <q-aria-tooltip-content {...props} ref={ref} />
})

export const AriaTooltipTrigger = forwardRef((props: AriaTooltipTriggerProps, ref: Ref<AriaTooltipTriggerElement>) => {
  return <q-aria-tooltip-trigger {...props} ref={ref} />
})
