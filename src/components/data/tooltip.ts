import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { TooltipProps, TooltipArrowProps, TooltipContentProps, TooltipTriggerProps } from '@aracna/react'
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
import { TooltipElement, TooltipArrowElement, TooltipContentElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip-element.js'

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
