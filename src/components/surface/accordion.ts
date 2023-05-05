import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AccordionProps, AccordionButtonProps, AccordionHeaderProps, AccordionPanelProps, AccordionSectionProps } from '@aracna/react'
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
} from '@aracna/web-components/elements/surface/accordion-element.js'

export const AracnaAccordion: ElementComponent<AccordionElement, AccordionProps> = createBaseElementComponent<
  AccordionElement,
  AccordionElementAttributes,
  AccordionElementEventMap
>('aracna-accordion', AccordionElement)

export const AracnaAccordionButton: ElementComponent<AccordionButtonElement, AccordionButtonProps> = createBaseElementComponent<
  AccordionButtonElement,
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap
>('aracna-accordion-button', AccordionButtonElement)

export const AracnaAccordionHeader: ElementComponent<AccordionHeaderElement, AccordionHeaderProps> = createBaseElementComponent<
  AccordionHeaderElement,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap
>('aracna-accordion-header', AccordionHeaderElement)

export const AracnaAccordionPanel: ElementComponent<AccordionPanelElement, AccordionPanelProps> = createBaseElementComponent<
  AccordionPanelElement,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap
>('aracna-accordion-panel', AccordionPanelElement)

export const AracnaAccordionSection: ElementComponent<AccordionSectionElement, AccordionSectionProps> = createBaseElementComponent<
  AccordionSectionElement,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap
>('aracna-accordion-section', AccordionSectionElement)
