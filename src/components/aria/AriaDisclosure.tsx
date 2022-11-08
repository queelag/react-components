import {
  AriaDisclosureButtonProps,
  AriaDisclosurePanelProps,
  AriaDisclosureProps,
  AriaDisclosureSectionProps,
  createElementComponent,
  ElementComponent
} from '@queelag/react'
import { AriaDisclosureButtonElement, AriaDisclosureElement, AriaDisclosurePanelElement, AriaDisclosureSectionElement } from '@queelag/web-components'

export const QAriaDisclosure: ElementComponent<AriaDisclosureElement, AriaDisclosureProps> = createElementComponent('q-aria-disclosure', AriaDisclosureElement)

export const QAriaDisclosureButton: ElementComponent<AriaDisclosureButtonElement, AriaDisclosureButtonProps> = createElementComponent(
  'q-aria-disclosure-button',
  AriaDisclosureButtonElement
)

export const QAriaDisclosurePanel: ElementComponent<AriaDisclosurePanelElement, AriaDisclosurePanelProps> = createElementComponent(
  'q-aria-disclosure-panel',
  AriaDisclosurePanelElement
)

export const QAriaDisclosureSection: ElementComponent<AriaDisclosureSectionElement, AriaDisclosureSectionProps> = createElementComponent(
  'q-aria-disclosure-section',
  AriaDisclosureSectionElement
)
