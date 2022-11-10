import {
  AriaDisclosureButtonProps,
  AriaDisclosurePanelProps,
  AriaDisclosureProps,
  AriaDisclosureSectionProps,
  createBaseElementComponent,
  ElementComponent
} from '@queelag/react'
import {
  AriaDisclosureButtonElement,
  AriaDisclosureElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@queelag/web-components/elements/aria/aria.disclosure.element.js'

export const QAriaDisclosure: ElementComponent<AriaDisclosureElement, AriaDisclosureProps> = createBaseElementComponent(
  'q-aria-disclosure',
  AriaDisclosureElement
)

export const QAriaDisclosureButton: ElementComponent<AriaDisclosureButtonElement, AriaDisclosureButtonProps> = createBaseElementComponent(
  'q-aria-disclosure-button',
  AriaDisclosureButtonElement
)

export const QAriaDisclosurePanel: ElementComponent<AriaDisclosurePanelElement, AriaDisclosurePanelProps> = createBaseElementComponent(
  'q-aria-disclosure-panel',
  AriaDisclosurePanelElement
)

export const QAriaDisclosureSection: ElementComponent<AriaDisclosureSectionElement, AriaDisclosureSectionProps> = createBaseElementComponent(
  'q-aria-disclosure-section',
  AriaDisclosureSectionElement
)
