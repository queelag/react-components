import {
  AccordionButtonProps,
  AccordionHeaderProps,
  AccordionPanelProps,
  AccordionProps,
  AccordionSectionProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@queelag/web-components/elements/surface/accordion.element'

export const QAccordion: ElementComponent<AccordionElement, AccordionProps> = createElementComponent('q-accordion', AccordionElement)

export const QAccordionButton: ElementComponent<AccordionButtonElement, AccordionButtonProps> = createElementComponent(
  'q-accordion-button',
  AccordionButtonElement
)

export const QAccordionHeader: ElementComponent<AccordionHeaderElement, AccordionHeaderProps> = createElementComponent(
  'q-accordion-header',
  AccordionHeaderElement
)

export const QAccordionPanel: ElementComponent<AccordionPanelElement, AccordionPanelProps> = createElementComponent('q-accordion-panel', AccordionPanelElement)

export const QAccordionSection: ElementComponent<AccordionSectionElement, AccordionSectionProps> = createElementComponent(
  'q-accordion-section',
  AccordionSectionElement
)
