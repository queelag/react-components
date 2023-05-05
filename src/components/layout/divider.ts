import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { DividerProps } from '@aracna/react'
import type { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import { DividerElement } from '@aracna/web-components/elements/layout/divider-element.js'

export const AracnaDivider: ElementComponent<DividerElement, DividerProps> = createBaseElementComponent<
  DividerElement,
  DividerElementAttributes,
  DividerElementEventMap
>('aracna-divider', DividerElement)
