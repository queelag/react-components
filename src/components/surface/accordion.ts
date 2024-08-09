import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAccordionProps,
  AracnaAracnaAccordionButtonProps,
  AracnaAracnaAccordionHeaderProps,
  AracnaAracnaAccordionPanelProps,
  AracnaAracnaAccordionSectionProps
} from '../../definitions/props.js'
import type {
  AracnaAccordionElementAttributes,
  AracnaAccordionElementEventMap,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap
} from '@aracna/web-components'
import {
  AracnaAccordionElement,
  AracnaAccordionButtonElement,
  AracnaAccordionHeaderElement,
  AracnaAccordionPanelElement,
  AracnaAccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'

export const AracnaAccordion: ElementComponent<AracnaAccordionElement, AracnaAracnaAccordionProps> = createBaseElementComponent<
  AracnaAccordionElement,
  AracnaAccordionElementAttributes,
  AracnaAccordionElementEventMap
>('aracna-accordion', AracnaAccordionElement)

export const AracnaAccordionButton: ElementComponent<AracnaAccordionButtonElement, AracnaAracnaAccordionButtonProps> = createBaseElementComponent<
  AracnaAccordionButtonElement,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap
>('aracna-accordion-button', AracnaAccordionButtonElement)

export const AracnaAccordionHeader: ElementComponent<AracnaAccordionHeaderElement, AracnaAracnaAccordionHeaderProps> = createBaseElementComponent<
  AracnaAccordionHeaderElement,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap
>('aracna-accordion-header', AracnaAccordionHeaderElement)

export const AracnaAccordionPanel: ElementComponent<AracnaAccordionPanelElement, AracnaAracnaAccordionPanelProps> = createBaseElementComponent<
  AracnaAccordionPanelElement,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap
>('aracna-accordion-panel', AracnaAccordionPanelElement)

export const AracnaAccordionSection: ElementComponent<AracnaAccordionSectionElement, AracnaAracnaAccordionSectionProps> = createBaseElementComponent<
  AracnaAccordionSectionElement,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap
>('aracna-accordion-section', AracnaAccordionSectionElement)
