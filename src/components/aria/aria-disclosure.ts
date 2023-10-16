import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAriaDisclosureProps,
  AracnaAriaDisclosureButtonProps,
  AracnaAriaDisclosurePanelProps,
  AracnaAriaDisclosureSectionProps
} from '@aracna/react'
import type {
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
} from '@aracna/web'
import {
  AriaDisclosureElement,
  AriaDisclosureButtonElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'

export const AracnaAriaDisclosure: ElementComponent<AriaDisclosureElement, AracnaAriaDisclosureProps> = createBaseElementComponent<
  AriaDisclosureElement,
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap
>('aracna-aria-disclosure', AriaDisclosureElement)

export const AracnaAriaDisclosureButton: ElementComponent<AriaDisclosureButtonElement, AracnaAriaDisclosureButtonProps> = createBaseElementComponent<
  AriaDisclosureButtonElement,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap
>('aracna-aria-disclosure-button', AriaDisclosureButtonElement)

export const AracnaAriaDisclosurePanel: ElementComponent<AriaDisclosurePanelElement, AracnaAriaDisclosurePanelProps> = createBaseElementComponent<
  AriaDisclosurePanelElement,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap
>('aracna-aria-disclosure-panel', AriaDisclosurePanelElement)

export const AracnaAriaDisclosureSection: ElementComponent<AriaDisclosureSectionElement, AracnaAriaDisclosureSectionProps> = createBaseElementComponent<
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
>('aracna-aria-disclosure-section', AriaDisclosureSectionElement)
