import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaTabsProps, AriaTabsPanelProps, AriaTabsTabProps } from '@aracna/react'
import type {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
} from '@aracna/web'
import { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/aria/aria-tabs'

export const AracnaAriaTabs: ElementComponent<AriaTabsElement, AriaTabsProps> = createBaseElementComponent<
  AriaTabsElement,
  AriaTabsElementAttributes,
  AriaTabsElementEventMap
>('aracna-aria-tabs', AriaTabsElement)

export const AracnaAriaTabsPanel: ElementComponent<AriaTabsPanelElement, AriaTabsPanelProps> = createBaseElementComponent<
  AriaTabsPanelElement,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap
>('aracna-aria-tabs-panel', AriaTabsPanelElement)

export const AracnaAriaTabsTab: ElementComponent<AriaTabsTabElement, AriaTabsTabProps> = createBaseElementComponent<
  AriaTabsTabElement,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
>('aracna-aria-tabs-tab', AriaTabsTabElement)
