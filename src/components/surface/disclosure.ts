import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { DisclosureProps, DisclosureButtonProps, DisclosurePanelProps, DisclosureSectionProps } from '@aracna/react'
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
