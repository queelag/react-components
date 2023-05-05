import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { TabsProps, TabsPanelProps, TabsTabProps } from '@aracna/react'
import type {
  TabsElementAttributes,
  TabsElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap
} from '@aracna/web'
import { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/navigation/tabs'

export const AracnaTabs: ElementComponent<TabsElement, TabsProps> = createBaseElementComponent<TabsElement, TabsElementAttributes, TabsElementEventMap>(
  'aracna-tabs',
  TabsElement
)

export const AracnaTabsPanel: ElementComponent<TabsPanelElement, TabsPanelProps> = createBaseElementComponent<
  TabsPanelElement,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap
>('aracna-tabs-panel', TabsPanelElement)

export const AracnaTabsTab: ElementComponent<TabsTabElement, TabsTabProps> = createBaseElementComponent<
  TabsTabElement,
  TabsTabElementAttributes,
  TabsTabElementEventMap
>('aracna-tabs-tab', TabsTabElement)
