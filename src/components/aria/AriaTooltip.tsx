import {
  AriaTooltipArrowProps,
  AriaTooltipContentProps,
  AriaTooltipProps,
  AriaTooltipTriggerProps,
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipElement,
  AriaTooltipTriggerElement
} from '@queelag/web-components/elements/aria/aria.tooltip.element.js'

export const QAriaTooltip: ElementComponent<AriaTooltipElement, AriaTooltipProps> = createBaseElementComponent('q-aria-tooltip', AriaTooltipElement)

export const QAriaTooltipArrow: ElementComponent<AriaTooltipArrowElement, AriaTooltipArrowProps> = createBaseElementComponent(
  'q-aria-tooltip-arrow',
  AriaTooltipArrowElement
)

export const QAriaTooltipContent: ElementComponent<AriaTooltipContentElement, AriaTooltipContentProps> = createFloatingElementComponent(
  'q-aria-tooltip-content',
  AriaTooltipContentElement
)

export const QAriaTooltipTrigger: ElementComponent<AriaTooltipTriggerElement, AriaTooltipTriggerProps> = createBaseElementComponent(
  'q-aria-tooltip-trigger',
  AriaTooltipTriggerElement
)
