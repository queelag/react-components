import {
  AccordionButtonProps,
  AccordionHeaderProps,
  AccordionPanelProps,
  AccordionProps,
  AccordionSectionProps,
  createBaseElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap,
  AccordionElementAttributes,
  AccordionElementEventMap,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap
} from '@aracna/web'
import {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion.element'

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
