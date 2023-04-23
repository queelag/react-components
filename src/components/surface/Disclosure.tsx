import {
  createBaseElementComponent,
  DisclosureButtonProps,
  DisclosurePanelProps,
  DisclosureProps,
  DisclosureSectionProps,
  ElementComponent
} from '@aracna/react'
import {
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap,
  DisclosureElementAttributes,
  DisclosureElementEventMap,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap
} from '@aracna/web'
import {
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure.element.js'

export const AracnaDisclosure: ElementComponent<DisclosureElement, DisclosureProps> = createBaseElementComponent<
  DisclosureElement,
  DisclosureElementAttributes,
  DisclosureElementEventMap
>('aracna-disclosure', DisclosureElement)

export const AracnaDisclosureButton: ElementComponent<DisclosureButtonElement, DisclosureButtonProps> = createBaseElementComponent<
  DisclosureButtonElement,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap
>('aracna-disclosure-button', DisclosureButtonElement)

export const AracnaDisclosurePanel: ElementComponent<DisclosurePanelElement, DisclosurePanelProps> = createBaseElementComponent<
  DisclosurePanelElement,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap
>('aracna-disclosure-panel', DisclosurePanelElement)

export const AracnaDisclosureSection: ElementComponent<DisclosureSectionElement, DisclosureSectionProps> = createBaseElementComponent<
  DisclosureSectionElement,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap
>('aracna-disclosure-section', DisclosureSectionElement)
