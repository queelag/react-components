import type {
  AriaAccordionButtonProps,
  AriaAccordionHeaderProps,
  AriaAccordionPanelProps,
  AriaAccordionProps,
  AriaAccordionSectionProps,
  ElementComponent
} from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type {
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap,
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
} from '@aracna/web'
import {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'

export const AracnaAriaAccordion: ElementComponent<AriaAccordionElement, AriaAccordionProps> = createBaseElementComponent<
  AriaAccordionElement,
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap
>('aracna-aria-accordion', AriaAccordionElement)

export const AracnaAriaAccordionButton: ElementComponent<AriaAccordionButtonElement, AriaAccordionButtonProps> = createBaseElementComponent<
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap
>('aracna-aria-accordion-button', AriaAccordionButtonElement)

export const AracnaAriaAccordionHeader: ElementComponent<AriaAccordionHeaderElement, AriaAccordionHeaderProps> = createBaseElementComponent<
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap
>('aracna-aria-accordion-header', AriaAccordionHeaderElement)

export const AracnaAriaAccordionPanel: ElementComponent<AriaAccordionPanelElement, AriaAccordionPanelProps> = createBaseElementComponent<
  AriaAccordionPanelElement,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap
>('aracna-aria-accordion-panel', AriaAccordionPanelElement)

export const AracnaAriaAccordionSection: ElementComponent<AriaAccordionSectionElement, AriaAccordionSectionProps> = createBaseElementComponent<
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
>('aracna-aria-accordion-section', AriaAccordionSectionElement)
