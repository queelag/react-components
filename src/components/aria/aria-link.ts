import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaLinkProps } from '../../definitions/props.js'
import type { AracnaAriaLinkElementAttributes, AracnaAriaLinkElementEventMap } from '@aracna/web-components'
import { AracnaAriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'

export const AracnaAracnaAriaLink: ElementComponent<AracnaAriaLinkElement, AracnaAracnaAriaLinkProps> = createBaseElementComponent<
  AracnaAriaLinkElement,
  AracnaAriaLinkElementAttributes,
  AracnaAriaLinkElementEventMap
>('aracna-aria-link', AracnaAriaLinkElement)
