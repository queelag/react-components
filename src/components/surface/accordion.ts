import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type {
  AracnaAccordionProps,
  AracnaAccordionButtonProps,
  AracnaAccordionHeaderProps,
  AracnaAccordionPanelProps,
  AracnaAccordionSectionProps
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

export const AracnaAccordion: ElementComponent<AracnaAccordionElement, AracnaAccordionProps> = createBaseElementComponent<
  AracnaAccordionElement,
  AracnaAccordionElementAttributes,
  AracnaAccordionElementEventMap
>('aracna-accordion', AracnaAccordionElement)

export const AracnaAccordionButton: ElementComponent<AracnaAccordionButtonElement, AracnaAccordionButtonProps> = createBaseElementComponent<
  AracnaAccordionButtonElement,
  AracnaAccordionButtonElementAttributes,
  AracnaAccordionButtonElementEventMap
>('aracna-accordion-button', AracnaAccordionButtonElement)

export const AracnaAccordionHeader: ElementComponent<AracnaAccordionHeaderElement, AracnaAccordionHeaderProps> = createBaseElementComponent<
  AracnaAccordionHeaderElement,
  AracnaAccordionHeaderElementAttributes,
  AracnaAccordionHeaderElementEventMap
>('aracna-accordion-header', AracnaAccordionHeaderElement)

export const AracnaAccordionPanel: ElementComponent<AracnaAccordionPanelElement, AracnaAccordionPanelProps> = createBaseElementComponent<
  AracnaAccordionPanelElement,
  AracnaAccordionPanelElementAttributes,
  AracnaAccordionPanelElementEventMap
>('aracna-accordion-panel', AracnaAccordionPanelElement)

export const AracnaAccordionSection: ElementComponent<AracnaAccordionSectionElement, AracnaAccordionSectionProps> = createBaseElementComponent<
  AracnaAccordionSectionElement,
  AracnaAccordionSectionElementAttributes,
  AracnaAccordionSectionElementEventMap
>('aracna-accordion-section', AracnaAccordionSectionElement, ['collapse', 'expand'])
