import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaLinkProps } from '@aracna/react'
import type { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import { AriaLinkElement } from '@aracna/web-components/aria/aria-link'

export const AracnaAriaLink: ElementComponent<AriaLinkElement, AriaLinkProps> = createBaseElementComponent<
  AriaLinkElement,
  AriaLinkElementAttributes,
  AriaLinkElementEventMap
>('aracna-aria-link', AriaLinkElement)
