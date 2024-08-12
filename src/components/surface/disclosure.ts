import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaDisclosureProps, AracnaDisclosureButtonProps, AracnaDisclosurePanelProps, AracnaDisclosureSectionProps } from '../../definitions/props.js'
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

export const AracnaDisclosure: ElementComponent<AracnaDisclosureElement, AracnaDisclosureProps> = createBaseElementComponent<
  AracnaDisclosureElement,
  AracnaDisclosureElementAttributes,
  AracnaDisclosureElementEventMap
>('aracna-disclosure', AracnaDisclosureElement)

export const AracnaDisclosureButton: ElementComponent<AracnaDisclosureButtonElement, AracnaDisclosureButtonProps> = createBaseElementComponent<
  AracnaDisclosureButtonElement,
  AracnaDisclosureButtonElementAttributes,
  AracnaDisclosureButtonElementEventMap
>('aracna-disclosure-button', AracnaDisclosureButtonElement)

export const AracnaDisclosurePanel: ElementComponent<AracnaDisclosurePanelElement, AracnaDisclosurePanelProps> = createBaseElementComponent<
  AracnaDisclosurePanelElement,
  AracnaDisclosurePanelElementAttributes,
  AracnaDisclosurePanelElementEventMap
>('aracna-disclosure-panel', AracnaDisclosurePanelElement)

export const AracnaDisclosureSection: ElementComponent<AracnaDisclosureSectionElement, AracnaDisclosureSectionProps> = createBaseElementComponent<
  AracnaDisclosureSectionElement,
  AracnaDisclosureSectionElementAttributes,
  AracnaDisclosureSectionElementEventMap
>('aracna-disclosure-section', AracnaDisclosureSectionElement, ['collapse', 'expand'])
