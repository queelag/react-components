import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaTooltipProps,
  AracnaAracnaAriaTooltipArrowProps,
  AracnaAracnaAriaTooltipContentProps,
  AracnaAracnaAriaTooltipTriggerProps
} from '../../definitions/props.js'
import type {
  AracnaAriaTooltipElementAttributes,
  AracnaAriaTooltipElementEventMap,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaTooltipElement,
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'

export const AracnaAracnaAriaTooltip: ElementComponent<AracnaAriaTooltipElement, AracnaAracnaAriaTooltipProps> = createBaseElementComponent<
  AracnaAriaTooltipElement,
  AracnaAriaTooltipElementAttributes,
  AracnaAriaTooltipElementEventMap
>('aracna-aria-tooltip', AracnaAriaTooltipElement)

export const AracnaAracnaAriaTooltipArrow: ElementComponent<AracnaAriaTooltipArrowElement, AracnaAracnaAriaTooltipArrowProps> = createBaseElementComponent<
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap
>('aracna-aria-tooltip-arrow', AracnaAriaTooltipArrowElement)

export const AracnaAracnaAriaTooltipContent: ElementComponent<AracnaAriaTooltipContentElement, AracnaAracnaAriaTooltipContentProps> =
  createFloatingElementComponent<AracnaAriaTooltipContentElement, AracnaAriaTooltipContentElementAttributes, AracnaAriaTooltipContentElementEventMap>(
    'aracna-aria-tooltip-content',
    AracnaAriaTooltipContentElement
  )

export const AracnaAracnaAriaTooltipTrigger: ElementComponent<AracnaAriaTooltipTriggerElement, AracnaAracnaAriaTooltipTriggerProps> =
  createBaseElementComponent<AracnaAriaTooltipTriggerElement, AracnaAriaTooltipTriggerElementAttributes, AracnaAriaTooltipTriggerElementEventMap>(
    'aracna-aria-tooltip-trigger',
    AracnaAriaTooltipTriggerElement
  )
