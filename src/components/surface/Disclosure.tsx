import { createElementComponent, DisclosureButtonProps, DisclosurePanelProps, DisclosureProps, DisclosureSectionProps, ElementComponent } from '@queelag/react'
import {
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@queelag/web-components/elements/surface/disclosure.element.js'

export const QDisclosure: ElementComponent<DisclosureElement, DisclosureProps> = createElementComponent('q-disclosure', DisclosureElement)

export const QDisclosureButton: ElementComponent<DisclosureButtonElement, DisclosureButtonProps> = createElementComponent(
  'q-disclosure-button',
  DisclosureButtonElement
)

export const QDisclosurePanel: ElementComponent<DisclosurePanelElement, DisclosurePanelProps> = createElementComponent(
  'q-disclosure-panel',
  DisclosurePanelElement
)

export const QDisclosureSection: ElementComponent<DisclosureSectionElement, DisclosureSectionProps> = createElementComponent(
  'q-disclosure-section',
  DisclosureSectionElement
)
