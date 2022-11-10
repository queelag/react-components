import {
  AccordionButtonProps,
  AccordionHeaderProps,
  AccordionPanelProps,
  AccordionProps,
  AccordionSectionProps,
  createBaseElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@queelag/web-components/elements/surface/accordion.element.js'

export const QAccordion: ElementComponent<AccordionElement, AccordionProps> = createBaseElementComponent('q-accordion', AccordionElement)

export const QAccordionButton: ElementComponent<AccordionButtonElement, AccordionButtonProps> = createBaseElementComponent(
  'q-accordion-button',
  AccordionButtonElement
)

export const QAccordionHeader: ElementComponent<AccordionHeaderElement, AccordionHeaderProps> = createBaseElementComponent(
  'q-accordion-header',
  AccordionHeaderElement
)

export const QAccordionPanel: ElementComponent<AccordionPanelElement, AccordionPanelProps> = createBaseElementComponent(
  'q-accordion-panel',
  AccordionPanelElement
)

export const QAccordionSection: ElementComponent<AccordionSectionElement, AccordionSectionProps> = createBaseElementComponent(
  'q-accordion-section',
  AccordionSectionElement
)
