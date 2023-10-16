import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaTabsProps, AracnaAriaTabsPanelProps, AracnaAriaTabsTabProps } from '@aracna/react'
import type {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
} from '@aracna/web'
import { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'

export const AracnaAriaTabs: ElementComponent<AriaTabsElement, AracnaAriaTabsProps> = createBaseElementComponent<
  AriaTabsElement,
  AriaTabsElementAttributes,
  AriaTabsElementEventMap
>('aracna-aria-tabs', AriaTabsElement)

export const AracnaAriaTabsPanel: ElementComponent<AriaTabsPanelElement, AracnaAriaTabsPanelProps> = createBaseElementComponent<
  AriaTabsPanelElement,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap
>('aracna-aria-tabs-panel', AriaTabsPanelElement)

export const AracnaAriaTabsTab: ElementComponent<AriaTabsTabElement, AracnaAriaTabsTabProps> = createBaseElementComponent<
  AriaTabsTabElement,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
>('aracna-aria-tabs-tab', AriaTabsTabElement, ['tabs-tab-selection'])
