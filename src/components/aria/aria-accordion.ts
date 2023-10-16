import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAriaAccordionProps,
  AracnaAriaAccordionButtonProps,
  AracnaAriaAccordionHeaderProps,
  AracnaAriaAccordionPanelProps,
  AracnaAriaAccordionSectionProps
} from '@aracna/react'
import type {
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
} from '@aracna/web'
import {
  AriaAccordionElement,
  AriaAccordionButtonElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'

export const AracnaAriaAccordion: ElementComponent<AriaAccordionElement, AracnaAriaAccordionProps> = createBaseElementComponent<
  AriaAccordionElement,
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap
>('aracna-aria-accordion', AriaAccordionElement)

export const AracnaAriaAccordionButton: ElementComponent<AriaAccordionButtonElement, AracnaAriaAccordionButtonProps> = createBaseElementComponent<
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap
>('aracna-aria-accordion-button', AriaAccordionButtonElement)

export const AracnaAriaAccordionHeader: ElementComponent<AriaAccordionHeaderElement, AracnaAriaAccordionHeaderProps> = createBaseElementComponent<
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap
>('aracna-aria-accordion-header', AriaAccordionHeaderElement)

export const AracnaAriaAccordionPanel: ElementComponent<AriaAccordionPanelElement, AracnaAriaAccordionPanelProps> = createBaseElementComponent<
  AriaAccordionPanelElement,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap
>('aracna-aria-accordion-panel', AriaAccordionPanelElement)

export const AracnaAriaAccordionSection: ElementComponent<AriaAccordionSectionElement, AracnaAriaAccordionSectionProps> = createBaseElementComponent<
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
>('aracna-aria-accordion-section', AriaAccordionSectionElement)
