import type { AriaLinkProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import { AriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'

export const AracnaAriaLink: ElementComponent<AriaLinkElement, AriaLinkProps> = createBaseElementComponent<
  AriaLinkElement,
  AriaLinkElementAttributes,
  AriaLinkElementEventMap
>('aracna-aria-link', AriaLinkElement)
