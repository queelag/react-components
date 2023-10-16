import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAccordionProps,
  AracnaAccordionButtonProps,
  AracnaAccordionHeaderProps,
  AracnaAccordionPanelProps,
  AracnaAccordionSectionProps
} from '@aracna/react'
import type {
  AccordionElementAttributes,
  AccordionElementEventMap,
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap
} from '@aracna/web'
import {
  AccordionElement,
  AccordionButtonElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'

export const AracnaAccordion: ElementComponent<AccordionElement, AracnaAccordionProps> = createBaseElementComponent<
  AccordionElement,
  AccordionElementAttributes,
  AccordionElementEventMap
>('aracna-accordion', AccordionElement)

export const AracnaAccordionButton: ElementComponent<AccordionButtonElement, AracnaAccordionButtonProps> = createBaseElementComponent<
  AccordionButtonElement,
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap
>('aracna-accordion-button', AccordionButtonElement)

export const AracnaAccordionHeader: ElementComponent<AccordionHeaderElement, AracnaAccordionHeaderProps> = createBaseElementComponent<
  AccordionHeaderElement,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap
>('aracna-accordion-header', AccordionHeaderElement)

export const AracnaAccordionPanel: ElementComponent<AccordionPanelElement, AracnaAccordionPanelProps> = createBaseElementComponent<
  AccordionPanelElement,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap
>('aracna-accordion-panel', AccordionPanelElement)

export const AracnaAccordionSection: ElementComponent<AccordionSectionElement, AracnaAccordionSectionProps> = createBaseElementComponent<
  AccordionSectionElement,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap
>('aracna-accordion-section', AccordionSectionElement)
