import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaAriaLinkProps } from '../../definitions/props.js'
import type { AracnaAriaLinkElementAttributes, AracnaAriaLinkElementEventMap } from '@aracna/web-components'
import { AracnaAriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'

export const AracnaAriaLink: ElementComponent<AracnaAriaLinkElement, AracnaAriaLinkProps> = createBaseElementComponent<
  AracnaAriaLinkElement,
  AracnaAriaLinkElementAttributes,
  AracnaAriaLinkElementEventMap
>('aracna-aria-link', AracnaAriaLinkElement)
