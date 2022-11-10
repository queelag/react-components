import { createElementComponent, ElementComponent, TabsPanelProps, TabsProps, TabsTabProps } from '@queelag/react'
import { TabsElement, TabsPanelElement, TabsTabElement } from '@queelag/web-components/elements/navigation/tabs.element.js'

export const QTabs: ElementComponent<TabsElement, TabsProps> = createElementComponent('q-tabs', TabsElement)
export const QTabsPanel: ElementComponent<TabsPanelElement, TabsPanelProps> = createElementComponent('q-tabs-panel', TabsPanelElement)
export const QTabsTab: ElementComponent<TabsTabElement, TabsTabProps> = createElementComponent('q-tabs-tab', TabsTabElement)
