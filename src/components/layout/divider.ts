import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaDividerProps } from '../../definitions/props.js'
import type { AracnaDividerElementAttributes, AracnaDividerElementEventMap } from '@aracna/web-components'
import { AracnaDividerElement } from '@aracna/web-components/elements/layout/divider-element'

export const AracnaDivider: ElementComponent<AracnaDividerElement, AracnaDividerProps> = createBaseElementComponent<
  AracnaDividerElement,
  AracnaDividerElementAttributes,
  AracnaDividerElementEventMap
>('aracna-divider', AracnaDividerElement)
