import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaAccordionProps,
  AracnaAracnaAriaAccordionButtonProps,
  AracnaAracnaAriaAccordionHeaderProps,
  AracnaAracnaAriaAccordionPanelProps,
  AracnaAracnaAriaAccordionSectionProps
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

export const AracnaAracnaAriaAccordion: ElementComponent<AracnaAriaAccordionElement, AracnaAracnaAriaAccordionProps> = createBaseElementComponent<
  AracnaAriaAccordionElement,
  AracnaAriaAccordionElementAttributes,
  AracnaAriaAccordionElementEventMap
>('aracna-aria-accordion', AracnaAriaAccordionElement)

export const AracnaAracnaAriaAccordionButton: ElementComponent<AracnaAriaAccordionButtonElement, AracnaAracnaAriaAccordionButtonProps> =
  createBaseElementComponent<AracnaAriaAccordionButtonElement, AracnaAriaAccordionButtonElementAttributes, AracnaAriaAccordionButtonElementEventMap>(
    'aracna-aria-accordion-button',
    AracnaAriaAccordionButtonElement
  )

export const AracnaAracnaAriaAccordionHeader: ElementComponent<AracnaAriaAccordionHeaderElement, AracnaAracnaAriaAccordionHeaderProps> =
  createBaseElementComponent<AracnaAriaAccordionHeaderElement, AracnaAriaAccordionHeaderElementAttributes, AracnaAriaAccordionHeaderElementEventMap>(
    'aracna-aria-accordion-header',
    AracnaAriaAccordionHeaderElement
  )

export const AracnaAracnaAriaAccordionPanel: ElementComponent<AracnaAriaAccordionPanelElement, AracnaAracnaAriaAccordionPanelProps> =
  createBaseElementComponent<AracnaAriaAccordionPanelElement, AracnaAriaAccordionPanelElementAttributes, AracnaAriaAccordionPanelElementEventMap>(
    'aracna-aria-accordion-panel',
    AracnaAriaAccordionPanelElement
  )

export const AracnaAracnaAriaAccordionSection: ElementComponent<AracnaAriaAccordionSectionElement, AracnaAracnaAriaAccordionSectionProps> =
  createBaseElementComponent<AracnaAriaAccordionSectionElement, AracnaAriaAccordionSectionElementAttributes, AracnaAriaAccordionSectionElementEventMap>(
    'aracna-aria-accordion-section',
    AracnaAriaAccordionSectionElement
  )
