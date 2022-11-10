import { AriaLinkProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaLinkElement } from '@queelag/web-components/elements/aria/aria.link.element.js'

export const QAriaLink: ElementComponent<AriaLinkElement, AriaLinkProps> = createElementComponent('q-aria-link', AriaLinkElement)
