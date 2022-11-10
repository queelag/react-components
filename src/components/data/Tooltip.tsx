import {
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent,
  TooltipArrowProps,
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps
} from '@queelag/react'
import { TooltipArrowElement, TooltipContentElement, TooltipElement, TooltipTriggerElement } from '@queelag/web-components/elements/data/tooltip.element.js'

export const QTooltip: ElementComponent<TooltipElement, TooltipProps> = createBaseElementComponent('q-tooltip', TooltipElement)
export const QTooltipArrow: ElementComponent<TooltipArrowElement, TooltipArrowProps> = createBaseElementComponent('q-tooltip-arrow', TooltipArrowElement)

export const QTooltipContent: ElementComponent<TooltipContentElement, TooltipContentProps> = createFloatingElementComponent(
  'q-tooltip-content',
  TooltipContentElement
)

export const QTooltipTrigger: ElementComponent<TooltipTriggerElement, TooltipTriggerProps> = createBaseElementComponent(
  'q-tooltip-trigger',
  TooltipTriggerElement
)
