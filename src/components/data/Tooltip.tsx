import { createElementComponent, ElementComponent, TooltipArrowProps, TooltipContentProps, TooltipProps, TooltipTriggerProps } from '@queelag/react'
import { TooltipArrowElement, TooltipContentElement, TooltipElement, TooltipTriggerElement } from '@queelag/web-components/elements/data/tooltip.element'

export const QTooltip: ElementComponent<TooltipElement, TooltipProps> = createElementComponent('q-tooltip', TooltipElement)
export const QTooltipArrow: ElementComponent<TooltipArrowElement, TooltipArrowProps> = createElementComponent('q-tooltip-arrow', TooltipArrowElement)
export const QTooltipContent: ElementComponent<TooltipContentElement, TooltipContentProps> = createElementComponent('q-tooltip-content', TooltipContentElement)
export const QTooltipTrigger: ElementComponent<TooltipTriggerElement, TooltipTriggerProps> = createElementComponent('q-tooltip-trigger', TooltipTriggerElement)
