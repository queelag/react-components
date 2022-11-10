import {
  AriaAccordionButtonProps,
  AriaAccordionHeaderProps,
  AriaAccordionPanelProps,
  AriaAccordionProps,
  AriaAccordionSectionProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@queelag/web-components/elements/aria/aria.accordion.element.js'

export const QAriaAccordion: ElementComponent<AriaAccordionElement, AriaAccordionProps> = createElementComponent('q-aria-accordion', AriaAccordionElement)

export const QAriaAccordionButton: ElementComponent<AriaAccordionButtonElement, AriaAccordionButtonProps> = createElementComponent(
  'q-aria-accordion-button',
  AriaAccordionButtonElement
)

export const QAriaAccordionHeader: ElementComponent<AriaAccordionHeaderElement, AriaAccordionHeaderProps> = createElementComponent(
  'q-aria-accordion-header',
  AriaAccordionHeaderElement
)

export const QAriaAccordionPanel: ElementComponent<AriaAccordionPanelElement, AriaAccordionPanelProps> = createElementComponent(
  'q-aria-accordion-panel',
  AriaAccordionPanelElement
)

export const QAriaAccordionSection: ElementComponent<AriaAccordionSectionElement, AriaAccordionSectionProps> = createElementComponent(
  'q-aria-accordion-section',
  AriaAccordionSectionElement
)
