import { AriaTabsPanelProps, AriaTabsProps, AriaTabsTabProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@queelag/web-components/elements/aria/aria.tabs.element.js'

export const QAriaTabs: ElementComponent<AriaTabsElement, AriaTabsProps> = createElementComponent('q-aria-tabs', AriaTabsElement)
export const QAriaTabsPanel: ElementComponent<AriaTabsPanelElement, AriaTabsPanelProps> = createElementComponent('q-aria-tabs-panel', AriaTabsPanelElement)
export const QAriaTabsTab: ElementComponent<AriaTabsTabElement, AriaTabsTabProps> = createElementComponent('q-aria-tabs-tab', AriaTabsTabElement)
