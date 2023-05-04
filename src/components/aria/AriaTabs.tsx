import { AriaTabsPanelProps, AriaTabsProps, AriaTabsTabProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
} from '@aracna/web'
import { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria.tabs.element.js'

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
