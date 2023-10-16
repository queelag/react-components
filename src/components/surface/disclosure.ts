import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaDisclosureProps, AracnaDisclosureButtonProps, AracnaDisclosurePanelProps, AracnaDisclosureSectionProps } from '@aracna/react'
import type {
  DisclosureElementAttributes,
  DisclosureElementEventMap,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap
} from '@aracna/web'
import {
  DisclosureElement,
  DisclosureButtonElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'

export const AracnaDisclosure: ElementComponent<DisclosureElement, AracnaDisclosureProps> = createBaseElementComponent<
  DisclosureElement,
  DisclosureElementAttributes,
  DisclosureElementEventMap
>('aracna-disclosure', DisclosureElement)

export const AracnaDisclosureButton: ElementComponent<DisclosureButtonElement, AracnaDisclosureButtonProps> = createBaseElementComponent<
  DisclosureButtonElement,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap
>('aracna-disclosure-button', DisclosureButtonElement)

export const AracnaDisclosurePanel: ElementComponent<DisclosurePanelElement, AracnaDisclosurePanelProps> = createBaseElementComponent<
  DisclosurePanelElement,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap
>('aracna-disclosure-panel', DisclosurePanelElement)

export const AracnaDisclosureSection: ElementComponent<DisclosureSectionElement, AracnaDisclosureSectionProps> = createBaseElementComponent<
  DisclosureSectionElement,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap
>('aracna-disclosure-section', DisclosureSectionElement)
