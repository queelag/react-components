import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaTooltipProps, AracnaAriaTooltipArrowProps, AracnaAriaTooltipContentProps, AracnaAriaTooltipTriggerProps } from '@aracna/react'
import type {
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap,
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
} from '@aracna/web'
import {
  AriaTooltipElement,
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'

export const AracnaAriaTooltip: ElementComponent<AriaTooltipElement, AracnaAriaTooltipProps> = createBaseElementComponent<
  AriaTooltipElement,
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap
>('aracna-aria-tooltip', AriaTooltipElement)

export const AracnaAriaTooltipArrow: ElementComponent<AriaTooltipArrowElement, AracnaAriaTooltipArrowProps> = createBaseElementComponent<
  AriaTooltipArrowElement,
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap
>('aracna-aria-tooltip-arrow', AriaTooltipArrowElement)

export const AracnaAriaTooltipContent: ElementComponent<AriaTooltipContentElement, AracnaAriaTooltipContentProps> = createFloatingElementComponent<
  AriaTooltipContentElement,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap
>('aracna-aria-tooltip-content', AriaTooltipContentElement)

export const AracnaAriaTooltipTrigger: ElementComponent<AriaTooltipTriggerElement, AracnaAriaTooltipTriggerProps> = createBaseElementComponent<
  AriaTooltipTriggerElement,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
>('aracna-aria-tooltip-trigger', AriaTooltipTriggerElement)
