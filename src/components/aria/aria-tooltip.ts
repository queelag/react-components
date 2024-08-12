import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type {
  AracnaAriaTooltipProps,
  AracnaAriaTooltipArrowProps,
  AracnaAriaTooltipContentProps,
  AracnaAriaTooltipTriggerProps
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

export const AracnaAriaTooltip: ElementComponent<AracnaAriaTooltipElement, AracnaAriaTooltipProps> = createBaseElementComponent<
  AracnaAriaTooltipElement,
  AracnaAriaTooltipElementAttributes,
  AracnaAriaTooltipElementEventMap
>('aracna-aria-tooltip', AracnaAriaTooltipElement, ['hide', 'show'])

export const AracnaAriaTooltipArrow: ElementComponent<AracnaAriaTooltipArrowElement, AracnaAriaTooltipArrowProps> = createBaseElementComponent<
  AracnaAriaTooltipArrowElement,
  AracnaAriaTooltipArrowElementAttributes,
  AracnaAriaTooltipArrowElementEventMap
>('aracna-aria-tooltip-arrow', AracnaAriaTooltipArrowElement)

export const AracnaAriaTooltipContent: ElementComponent<AracnaAriaTooltipContentElement, AracnaAriaTooltipContentProps> = createFloatingElementComponent<
  AracnaAriaTooltipContentElement,
  AracnaAriaTooltipContentElementAttributes,
  AracnaAriaTooltipContentElementEventMap
>('aracna-aria-tooltip-content', AracnaAriaTooltipContentElement)

export const AracnaAriaTooltipTrigger: ElementComponent<AracnaAriaTooltipTriggerElement, AracnaAriaTooltipTriggerProps> = createBaseElementComponent<
  AracnaAriaTooltipTriggerElement,
  AracnaAriaTooltipTriggerElementAttributes,
  AracnaAriaTooltipTriggerElementEventMap
>('aracna-aria-tooltip-trigger', AracnaAriaTooltipTriggerElement)
