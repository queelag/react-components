import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAriaDisclosureProps,
  AracnaAriaDisclosureButtonProps,
  AracnaAriaDisclosurePanelProps,
  AracnaAriaDisclosureSectionProps
} from '../../definitions/props.js'
import type {
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'

export const AracnaAriaDisclosure: ElementComponent<AracnaAriaDisclosureElement, AracnaAriaDisclosureProps> = createBaseElementComponent<
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap
>('aracna-aria-disclosure', AracnaAriaDisclosureElement)

export const AracnaAriaDisclosureButton: ElementComponent<AracnaAriaDisclosureButtonElement, AracnaAriaDisclosureButtonProps> = createBaseElementComponent<
  AracnaAriaDisclosureButtonElement,
  AracnaAriaDisclosureButtonElementAttributes,
  AracnaAriaDisclosureButtonElementEventMap
>('aracna-aria-disclosure-button', AracnaAriaDisclosureButtonElement)

export const AracnaAriaDisclosurePanel: ElementComponent<AracnaAriaDisclosurePanelElement, AracnaAriaDisclosurePanelProps> = createBaseElementComponent<
  AracnaAriaDisclosurePanelElement,
  AracnaAriaDisclosurePanelElementAttributes,
  AracnaAriaDisclosurePanelElementEventMap
>('aracna-aria-disclosure-panel', AracnaAriaDisclosurePanelElement)

export const AracnaAriaDisclosureSection: ElementComponent<AracnaAriaDisclosureSectionElement, AracnaAriaDisclosureSectionProps> = createBaseElementComponent<
  AracnaAriaDisclosureSectionElement,
  AracnaAriaDisclosureSectionElementAttributes,
  AracnaAriaDisclosureSectionElementEventMap
>('aracna-aria-disclosure-section', AracnaAriaDisclosureSectionElement)
