import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaTooltipProps,
  AracnaAracnaTooltipArrowProps,
  AracnaAracnaTooltipContentProps,
  AracnaAracnaTooltipTriggerProps
} from '../../definitions/props.js'
import type {
  AracnaTooltipElementAttributes,
  AracnaTooltipElementEventMap,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
} from '@aracna/web-components'
import {
  AracnaTooltipElement,
  AracnaTooltipArrowElement,
  AracnaTooltipContentElement,
  AracnaTooltipTriggerElement
} from '@aracna/web-components/elements/data/tooltip-element'

export const AracnaAracnaTooltip: ElementComponent<AracnaTooltipElement, AracnaAracnaTooltipProps> = createBaseElementComponent<
  AracnaTooltipElement,
  AracnaTooltipElementAttributes,
  AracnaTooltipElementEventMap
>('aracna-tooltip', AracnaTooltipElement)

export const AracnaAracnaTooltipArrow: ElementComponent<AracnaTooltipArrowElement, AracnaAracnaTooltipArrowProps> = createBaseElementComponent<
  AracnaTooltipArrowElement,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap
>('aracna-tooltip-arrow', AracnaTooltipArrowElement)

export const AracnaAracnaTooltipContent: ElementComponent<AracnaTooltipContentElement, AracnaAracnaTooltipContentProps> = createFloatingElementComponent<
  AracnaTooltipContentElement,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap
>('aracna-tooltip-content', AracnaTooltipContentElement)

export const AracnaAracnaTooltipTrigger: ElementComponent<AracnaTooltipTriggerElement, AracnaAracnaTooltipTriggerProps> = createBaseElementComponent<
  AracnaTooltipTriggerElement,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
>('aracna-tooltip-trigger', AracnaTooltipTriggerElement)
