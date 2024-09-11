import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaAriaHeadingProps } from '../../definitions/props.js'
import type { AracnaAriaHeadingElementAttributes, AracnaAriaHeadingElementEventMap } from '@aracna/web-components'
import { AracnaAriaHeadingElement } from '@aracna/web-components/elements/aria/aria-heading-element'

export const AracnaAriaHeading: ElementComponent<AracnaAriaHeadingElement, AracnaAriaHeadingProps> = createBaseElementComponent<
  AracnaAriaHeadingElement,
  AracnaAriaHeadingElementAttributes,
  AracnaAriaHeadingElementEventMap
>('aracna-aria-heading', AracnaAriaHeadingElement)
