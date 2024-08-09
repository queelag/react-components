import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaTabsProps, AracnaAracnaAriaTabsPanelProps, AracnaAracnaAriaTabsTabProps } from '../../definitions/props.js'
import type {
  AracnaAriaTabsElementAttributes,
  AracnaAriaTabsElementEventMap,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap,
  AracnaAriaTabsTabElementAttributes,
  AracnaAriaTabsTabElementEventMap
} from '@aracna/web-components'
import { AracnaAriaTabsElement, AracnaAriaTabsPanelElement, AracnaAriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'

export const AracnaAriaTabs: ElementComponent<AracnaAriaTabsElement, AracnaAracnaAriaTabsProps> = createBaseElementComponent<
  AracnaAriaTabsElement,
  AracnaAriaTabsElementAttributes,
  AracnaAriaTabsElementEventMap
>('aracna-aria-tabs', AracnaAriaTabsElement)

export const AracnaAriaTabsPanel: ElementComponent<AracnaAriaTabsPanelElement, AracnaAracnaAriaTabsPanelProps> = createBaseElementComponent<
  AracnaAriaTabsPanelElement,
  AracnaAriaTabsPanelElementAttributes,
  AracnaAriaTabsPanelElementEventMap
>('aracna-aria-tabs-panel', AracnaAriaTabsPanelElement)

export const AracnaAriaTabsTab: ElementComponent<AracnaAriaTabsTabElement, AracnaAracnaAriaTabsTabProps> = createBaseElementComponent<
  AracnaAriaTabsTabElement,
  AracnaAriaTabsTabElementAttributes,
  AracnaAriaTabsTabElementEventMap
>('aracna-aria-tabs-tab', AracnaAriaTabsTabElement, ['tabs-tab-selection'])
