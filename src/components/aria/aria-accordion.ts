import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type {
  AracnaAriaAccordionProps,
  AracnaAriaAccordionButtonProps,
  AracnaAriaAccordionHeaderProps,
  AracnaAriaAccordionPanelProps,
  AracnaAriaAccordionSectionProps
} from '../../definitions/props.js'
import type {
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaAccordionElement,
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'

export const AracnaAriaAccordion: ElementComponent<AracnaAriaAccordionElement, AracnaAriaAccordionProps> = createBaseElementComponent<
  AracnaAriaAccordionElement,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap
>('aracna-aria-accordion', AracnaAriaAccordionElement)

export const AracnaAriaAccordionButton: ElementComponent<AracnaAriaAccordionButtonElement, AracnaAriaAccordionButtonProps> = createBaseElementComponent<
  AracnaAriaAccordionButtonElement,
  AracnaAriaAccordionButtonElementAttributes,
  AracnaAriaAccordionButtonElementEventMap
>('aracna-aria-accordion-button', AracnaAriaAccordionButtonElement)

export const AracnaAriaAccordionHeader: ElementComponent<AracnaAriaAccordionHeaderElement, AracnaAriaAccordionHeaderProps> = createBaseElementComponent<
  AracnaAriaAccordionHeaderElement,
  AracnaAriaAccordionHeaderElementAttributes,
  AracnaAriaAccordionHeaderElementEventMap
>('aracna-aria-accordion-header', AracnaAriaAccordionHeaderElement)

export const AracnaAriaAccordionPanel: ElementComponent<AracnaAriaAccordionPanelElement, AracnaAriaAccordionPanelProps> = createBaseElementComponent<
  AracnaAriaAccordionPanelElement,
  AracnaAriaAccordionPanelElementAttributes,
  AracnaAriaAccordionPanelElementEventMap
>('aracna-aria-accordion-panel', AracnaAriaAccordionPanelElement)

export const AracnaAriaAccordionSection: ElementComponent<AracnaAriaAccordionSectionElement, AracnaAriaAccordionSectionProps> = createBaseElementComponent<
  AracnaAriaAccordionSectionElement,
  AracnaAriaAccordionSectionElementAttributes,
  AracnaAriaAccordionSectionElementEventMap
>('aracna-aria-accordion-section', AracnaAriaAccordionSectionElement, ['collapse', 'expand'])
