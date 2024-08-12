import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaTabsProps, AracnaTabsPanelProps, AracnaTabsTabProps } from '../../definitions/props.js'
import type {
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap
} from '@aracna/web-components'
import { AracnaTabsElement, AracnaTabsPanelElement, AracnaTabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'

export const AracnaTabs: ElementComponent<AracnaTabsElement, AracnaTabsProps> = createBaseElementComponent<
  AracnaTabsElement,
  AracnaTabsElementAttributes,
  AracnaTabsElementEventMap
>('aracna-tabs', AracnaTabsElement)

export const AracnaTabsPanel: ElementComponent<AracnaTabsPanelElement, AracnaTabsPanelProps> = createBaseElementComponent<
  AracnaTabsPanelElement,
  AracnaTabsPanelElementAttributes,
  AracnaTabsPanelElementEventMap
>('aracna-tabs-panel', AracnaTabsPanelElement)

export const AracnaTabsTab: ElementComponent<AracnaTabsTabElement, AracnaTabsTabProps> = createBaseElementComponent<
  AracnaTabsTabElement,
  AracnaTabsTabElementAttributes,
  AracnaTabsTabElementEventMap
>('aracna-tabs-tab', AracnaTabsTabElement, ['select'])
