import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaDisclosureProps,
  AracnaAracnaAriaDisclosureButtonProps,
  AracnaAracnaAriaDisclosurePanelProps,
  AracnaAracnaAriaDisclosureSectionProps
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

export const AracnaAracnaAriaDisclosure: ElementComponent<AracnaAriaDisclosureElement, AracnaAracnaAriaDisclosureProps> = createBaseElementComponent<
  AracnaAriaDisclosureElement,
  AracnaAriaDisclosureElementAttributes,
  AracnaAriaDisclosureElementEventMap
>('aracna-aria-disclosure', AracnaAriaDisclosureElement)

export const AracnaAracnaAriaDisclosureButton: ElementComponent<AracnaAriaDisclosureButtonElement, AracnaAracnaAriaDisclosureButtonProps> =
  createBaseElementComponent<AracnaAriaDisclosureButtonElement, AracnaAriaDisclosureButtonElementAttributes, AracnaAriaDisclosureButtonElementEventMap>(
    'aracna-aria-disclosure-button',
    AracnaAriaDisclosureButtonElement
  )

export const AracnaAracnaAriaDisclosurePanel: ElementComponent<AracnaAriaDisclosurePanelElement, AracnaAracnaAriaDisclosurePanelProps> =
  createBaseElementComponent<AracnaAriaDisclosurePanelElement, AracnaAriaDisclosurePanelElementAttributes, AracnaAriaDisclosurePanelElementEventMap>(
    'aracna-aria-disclosure-panel',
    AracnaAriaDisclosurePanelElement
  )

export const AracnaAracnaAriaDisclosureSection: ElementComponent<AracnaAriaDisclosureSectionElement, AracnaAracnaAriaDisclosureSectionProps> =
  createBaseElementComponent<AracnaAriaDisclosureSectionElement, AracnaAriaDisclosureSectionElementAttributes, AracnaAriaDisclosureSectionElementEventMap>(
    'aracna-aria-disclosure-section',
    AracnaAriaDisclosureSectionElement
  )
