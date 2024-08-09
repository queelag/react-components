import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaDividerProps } from '../../definitions/props.js'
import type { AracnaDividerElementAttributes, AracnaDividerElementEventMap } from '@aracna/web-components'
import { AracnaDividerElement } from '@aracna/web-components/elements/layout/divider-element'

export const AracnaAracnaDivider: ElementComponent<AracnaDividerElement, AracnaAracnaDividerProps> = createBaseElementComponent<
  AracnaDividerElement,
  AracnaDividerElementAttributes,
  AracnaDividerElementEventMap
>('aracna-divider', AracnaDividerElement)
