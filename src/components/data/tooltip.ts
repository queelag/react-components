import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type { AracnaTooltipProps, AracnaTooltipArrowProps, AracnaTooltipContentProps, AracnaTooltipTriggerProps } from '../../definitions/props.js'
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

export const AracnaTooltip: ElementComponent<AracnaTooltipElement, AracnaTooltipProps> = createBaseElementComponent<
  AracnaTooltipElement,
  AracnaTooltipElementAttributes,
  AracnaTooltipElementEventMap
>('aracna-tooltip', AracnaTooltipElement, ['hide', 'show'])

export const AracnaTooltipArrow: ElementComponent<AracnaTooltipArrowElement, AracnaTooltipArrowProps> = createBaseElementComponent<
  AracnaTooltipArrowElement,
  AracnaTooltipArrowElementAttributes,
  AracnaTooltipArrowElementEventMap
>('aracna-tooltip-arrow', AracnaTooltipArrowElement)

export const AracnaTooltipContent: ElementComponent<AracnaTooltipContentElement, AracnaTooltipContentProps> = createFloatingElementComponent<
  AracnaTooltipContentElement,
  AracnaTooltipContentElementAttributes,
  AracnaTooltipContentElementEventMap
>('aracna-tooltip-content', AracnaTooltipContentElement)

export const AracnaTooltipTrigger: ElementComponent<AracnaTooltipTriggerElement, AracnaTooltipTriggerProps> = createBaseElementComponent<
  AracnaTooltipTriggerElement,
  AracnaTooltipTriggerElementAttributes,
  AracnaTooltipTriggerElementEventMap
>('aracna-tooltip-trigger', AracnaTooltipTriggerElement)
