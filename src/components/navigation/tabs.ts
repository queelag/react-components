import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaTabsProps, AracnaTabsPanelProps, AracnaTabsTabProps } from '@aracna/react'
import type {
  TabsElementAttributes,
  TabsElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap
} from '@aracna/web'
import { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'

export const AracnaTabs: ElementComponent<TabsElement, AracnaTabsProps> = createBaseElementComponent<TabsElement, TabsElementAttributes, TabsElementEventMap>(
  'aracna-tabs',
  TabsElement
)

export const AracnaTabsPanel: ElementComponent<TabsPanelElement, AracnaTabsPanelProps> = createBaseElementComponent<
  TabsPanelElement,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap
>('aracna-tabs-panel', TabsPanelElement)

export const AracnaTabsTab: ElementComponent<TabsTabElement, AracnaTabsTabProps> = createBaseElementComponent<
  TabsTabElement,
  TabsTabElementAttributes,
  TabsTabElementEventMap
>('aracna-tabs-tab', TabsTabElement, ['tabs-tab-selection'])
