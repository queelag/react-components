import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaDividerProps } from '@aracna/react'
import type { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import { DividerElement } from '@aracna/web-components/elements/layout/divider-element'

export const AracnaDivider: ElementComponent<DividerElement, AracnaDividerProps> = createBaseElementComponent<
  DividerElement,
  DividerElementAttributes,
  DividerElementEventMap
>('aracna-divider', DividerElement)
