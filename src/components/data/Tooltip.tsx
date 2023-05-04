import {
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent,
  TooltipArrowProps,
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps
} from '@aracna/react'
import {
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap,
  TooltipElementAttributes,
  TooltipElementEventMap,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
} from '@aracna/web'
import { TooltipArrowElement, TooltipContentElement, TooltipElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip.element'

export const AracnaTooltip: ElementComponent<TooltipElement, TooltipProps> = createBaseElementComponent<
  TooltipElement,
  TooltipElementAttributes,
  TooltipElementEventMap
>('aracna-tooltip', TooltipElement)

export const AracnaTooltipArrow: ElementComponent<TooltipArrowElement, TooltipArrowProps> = createBaseElementComponent<
  TooltipArrowElement,
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap
>('aracna-tooltip-arrow', TooltipArrowElement)

export const AracnaTooltipContent: ElementComponent<TooltipContentElement, TooltipContentProps> = createFloatingElementComponent<
  TooltipContentElement,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap
>('aracna-tooltip-content', TooltipContentElement)

export const AracnaTooltipTrigger: ElementComponent<TooltipTriggerElement, TooltipTriggerProps> = createBaseElementComponent<
  TooltipTriggerElement,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
>('aracna-tooltip-trigger', TooltipTriggerElement)
