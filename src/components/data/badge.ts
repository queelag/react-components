import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaBadgeProps } from '../../definitions/props.js'
import type { AracnaBadgeElementAttributes, AracnaBadgeElementEventMap } from '@aracna/web-components'
import { AracnaBadgeElement } from '@aracna/web-components/elements/data/badge-element'

export const AracnaBadge: ElementComponent<AracnaBadgeElement, AracnaBadgeProps> = createBaseElementComponent<
  AracnaBadgeElement,
  AracnaBadgeElementAttributes,
  AracnaBadgeElementEventMap
>('aracna-badge', AracnaBadgeElement)
