import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaTooltipProps, AracnaTooltipArrowProps, AracnaTooltipContentProps, AracnaTooltipTriggerProps } from '@aracna/react'
import type {
  TooltipElementAttributes,
  TooltipElementEventMap,
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
} from '@aracna/web'
import { TooltipElement, TooltipArrowElement, TooltipContentElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip-element'

export const AracnaTooltip: ElementComponent<TooltipElement, AracnaTooltipProps> = createBaseElementComponent<
  TooltipElement,
  TooltipElementAttributes,
  TooltipElementEventMap
>('aracna-tooltip', TooltipElement)

export const AracnaTooltipArrow: ElementComponent<TooltipArrowElement, AracnaTooltipArrowProps> = createBaseElementComponent<
  TooltipArrowElement,
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap
>('aracna-tooltip-arrow', TooltipArrowElement)

export const AracnaTooltipContent: ElementComponent<TooltipContentElement, AracnaTooltipContentProps> = createFloatingElementComponent<
  TooltipContentElement,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap
>('aracna-tooltip-content', TooltipContentElement)

export const AracnaTooltipTrigger: ElementComponent<TooltipTriggerElement, AracnaTooltipTriggerProps> = createBaseElementComponent<
  TooltipTriggerElement,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
>('aracna-tooltip-trigger', TooltipTriggerElement)
