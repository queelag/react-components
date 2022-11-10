import {
  createBaseElementComponent,
  DisclosureButtonProps,
  DisclosurePanelProps,
  DisclosureProps,
  DisclosureSectionProps,
  ElementComponent
} from '@queelag/react'
import {
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@queelag/web-components/elements/surface/disclosure.element.js'

export const QDisclosure: ElementComponent<DisclosureElement, DisclosureProps> = createBaseElementComponent('q-disclosure', DisclosureElement)

export const QDisclosureButton: ElementComponent<DisclosureButtonElement, DisclosureButtonProps> = createBaseElementComponent(
  'q-disclosure-button',
  DisclosureButtonElement
)

export const QDisclosurePanel: ElementComponent<DisclosurePanelElement, DisclosurePanelProps> = createBaseElementComponent(
  'q-disclosure-panel',
  DisclosurePanelElement
)

export const QDisclosureSection: ElementComponent<DisclosureSectionElement, DisclosureSectionProps> = createBaseElementComponent(
  'q-disclosure-section',
  DisclosureSectionElement
)
