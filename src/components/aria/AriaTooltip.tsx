import {
  AriaTooltipArrowProps,
  AriaTooltipContentProps,
  AriaTooltipProps,
  AriaTooltipTriggerProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import { AriaTooltipArrowElement, AriaTooltipContentElement, AriaTooltipElement, AriaTooltipTriggerElement } from '@queelag/web-components'

export const QAriaTooltip: ElementComponent<AriaTooltipElement, AriaTooltipProps> = createElementComponent('q-aria-tooltip', AriaTooltipElement)

export const QAriaTooltipArrow: ElementComponent<AriaTooltipArrowElement, AriaTooltipArrowProps> = createElementComponent(
  'q-aria-tooltip-arrow',
  AriaTooltipArrowElement
)

export const QAriaTooltipContent: ElementComponent<AriaTooltipContentElement, AriaTooltipContentProps> = createElementComponent(
  'q-aria-tooltip-content',
  AriaTooltipContentElement
)

export const QAriaTooltipTrigger: ElementComponent<AriaTooltipTriggerElement, AriaTooltipTriggerProps> = createElementComponent(
  'q-aria-tooltip-trigger',
  AriaTooltipTriggerElement
)
