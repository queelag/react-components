import { AriaTabsPanelProps, AriaTabsProps, AriaTabsTabProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@queelag/web-components/elements/aria/aria.tabs.element.js'

export const QAriaTabs: ElementComponent<AriaTabsElement, AriaTabsProps> = createBaseElementComponent('q-aria-tabs', AriaTabsElement)
export const QAriaTabsPanel: ElementComponent<AriaTabsPanelElement, AriaTabsPanelProps> = createBaseElementComponent('q-aria-tabs-panel', AriaTabsPanelElement)
export const QAriaTabsTab: ElementComponent<AriaTabsTabElement, AriaTabsTabProps> = createBaseElementComponent('q-aria-tabs-tab', AriaTabsTabElement)
