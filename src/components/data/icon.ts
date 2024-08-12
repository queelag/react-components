import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaIconProps } from '../../definitions/props.js'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'

export const AracnaIcon: ElementComponent<AracnaIconElement, AracnaIconProps> = createBaseElementComponent<
  AracnaIconElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('aracna-icon', AracnaIconElement, ['fetch', 'parse'])
