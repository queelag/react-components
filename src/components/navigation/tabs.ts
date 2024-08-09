import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaTabsProps, AracnaAracnaTabsPanelProps, AracnaAracnaTabsTabProps } from '../../definitions/props.js'
import type {
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap
} from '@aracna/web-components'
import { AracnaTabsElement, AracnaTabsPanelElement, AracnaTabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'

export const AracnaTabs: ElementComponent<AracnaTabsElement, AracnaAracnaTabsProps> = createBaseElementComponent<
  AracnaTabsElement,
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap
>('aracna-tabs', AracnaTabsElement)

export const AracnaTabsPanel: ElementComponent<AracnaTabsPanelElement, AracnaAracnaTabsPanelProps> = createBaseElementComponent<
  AracnaTabsPanelElement,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap
>('aracna-tabs-panel', AracnaTabsPanelElement)

export const AracnaTabsTab: ElementComponent<AracnaTabsTabElement, AracnaAracnaTabsTabProps> = createBaseElementComponent<
  AracnaTabsTabElement,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap
>('aracna-tabs-tab', AracnaTabsTabElement, ['tabs-tab-selection'])
