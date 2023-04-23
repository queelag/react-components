import { AriaLinkProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import { AriaLinkElement } from '@aracna/web-components/elements/aria/aria.link.element.js'

export const AracnaAriaLink: ElementComponent<AriaLinkElement, AriaLinkProps> = createBaseElementComponent<
  AriaLinkElement,
  AriaLinkElementAttributes,
  AriaLinkElementEventMap
>('aracna-aria-link', AriaLinkElement)
