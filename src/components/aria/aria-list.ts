import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaListProps, AriaListItemProps } from '@aracna/react'
import type { AriaListElementAttributes, AriaListElementEventMap, AriaListItemElementAttributes, AriaListItemElementEventMap } from '@aracna/web'
import { AriaListElement, AriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'

export const AracnaAriaList: ElementComponent<AriaListElement, AriaListProps> = createBaseElementComponent<
  AriaListElement,
  AriaListElementAttributes,
  AriaListElementEventMap
>('aracna-aria-list', AriaListElement)

export const AracnaAriaListItem: ElementComponent<AriaListItemElement, AriaListItemProps> = createBaseElementComponent<
  AriaListItemElement,
  AriaListItemElementAttributes,
  AriaListItemElementEventMap
>('aracna-aria-list-item', AriaListItemElement)
