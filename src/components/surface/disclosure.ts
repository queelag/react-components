import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaDisclosureProps,
  AracnaAracnaDisclosureButtonProps,
  AracnaAracnaDisclosurePanelProps,
  AracnaAracnaDisclosureSectionProps
} from '../../definitions/props.js'
import type {
  AracnaDisclosureElementAttributes,
  AracnaDisclosureElementEventMap,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap
} from '@aracna/web-components'
import {
  AracnaDisclosureElement,
  AracnaDisclosureButtonElement,
  AracnaDisclosurePanelElement,
  AracnaDisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'

export const AracnaAracnaDisclosure: ElementComponent<AracnaDisclosureElement, AracnaAracnaDisclosureProps> = createBaseElementComponent<
  AracnaDisclosureElement,
  AracnaDisclosureElementAttributes,
  AracnaDisclosureElementEventMap
>('aracna-disclosure', AracnaDisclosureElement)

export const AracnaAracnaDisclosureButton: ElementComponent<AracnaDisclosureButtonElement, AracnaAracnaDisclosureButtonProps> = createBaseElementComponent<
  AracnaDisclosureButtonElement,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap
>('aracna-disclosure-button', AracnaDisclosureButtonElement)

export const AracnaAracnaDisclosurePanel: ElementComponent<AracnaDisclosurePanelElement, AracnaAracnaDisclosurePanelProps> = createBaseElementComponent<
  AracnaDisclosurePanelElement,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap
>('aracna-disclosure-panel', AracnaDisclosurePanelElement)

export const AracnaAracnaDisclosureSection: ElementComponent<AracnaDisclosureSectionElement, AracnaAracnaDisclosureSectionProps> = createBaseElementComponent<
  AracnaDisclosureSectionElement,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap
>('aracna-disclosure-section', AracnaDisclosureSectionElement)
