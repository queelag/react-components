import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaIconProps } from '../../definitions/props.js'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'

export const AracnaAracnaIcon: ElementComponent<AracnaIconElement, AracnaAracnaIconProps> = createBaseElementComponent<
  AracnaIconElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('aracna-icon', AracnaIconElement)
