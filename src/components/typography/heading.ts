import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaHeadingProps } from '../../definitions/props.js'
import type { AracnaHeadingElementAttributes, AracnaHeadingElementEventMap } from '@aracna/web-components'
import { AracnaHeadingElement } from '@aracna/web-components/elements/typography/heading-element'

export const AracnaHeading: ElementComponent<AracnaHeadingElement, AracnaHeadingProps> = createBaseElementComponent<
  AracnaHeadingElement,
  AracnaHeadingElementAttributes,
  AracnaHeadingElementEventMap
>('aracna-heading', AracnaHeadingElement)
