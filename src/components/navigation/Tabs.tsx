import { createBaseElementComponent, ElementComponent, TabsPanelProps, TabsProps, TabsTabProps } from '@queelag/react'
import { TabsElement, TabsPanelElement, TabsTabElement } from '@queelag/web-components/elements/navigation/tabs.element.js'

export const QTabs: ElementComponent<TabsElement, TabsProps> = createBaseElementComponent('q-tabs', TabsElement)
export const QTabsPanel: ElementComponent<TabsPanelElement, TabsPanelProps> = createBaseElementComponent('q-tabs-panel', TabsPanelElement)
export const QTabsTab: ElementComponent<TabsTabElement, TabsTabProps> = createBaseElementComponent('q-tabs-tab', TabsTabElement)
