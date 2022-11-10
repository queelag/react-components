import {
  AriaAccordionButtonProps,
  AriaAccordionHeaderProps,
  AriaAccordionPanelProps,
  AriaAccordionProps,
  AriaAccordionSectionProps,
  createBaseElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@queelag/web-components/elements/aria/aria.accordion.element.js'

export const QAriaAccordion: ElementComponent<AriaAccordionElement, AriaAccordionProps> = createBaseElementComponent('q-aria-accordion', AriaAccordionElement)

export const QAriaAccordionButton: ElementComponent<AriaAccordionButtonElement, AriaAccordionButtonProps> = createBaseElementComponent(
  'q-aria-accordion-button',
  AriaAccordionButtonElement
)

export const QAriaAccordionHeader: ElementComponent<AriaAccordionHeaderElement, AriaAccordionHeaderProps> = createBaseElementComponent(
  'q-aria-accordion-header',
  AriaAccordionHeaderElement
)

export const QAriaAccordionPanel: ElementComponent<AriaAccordionPanelElement, AriaAccordionPanelProps> = createBaseElementComponent(
  'q-aria-accordion-panel',
  AriaAccordionPanelElement
)

export const QAriaAccordionSection: ElementComponent<AriaAccordionSectionElement, AriaAccordionSectionProps> = createBaseElementComponent(
  'q-aria-accordion-section',
  AriaAccordionSectionElement
)
