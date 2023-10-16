import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaListProps, AracnaAriaListItemProps } from '@aracna/react'
import type { AriaListElementAttributes, AriaListElementEventMap, AriaListItemElementAttributes, AriaListItemElementEventMap } from '@aracna/web'
import { AriaListElement, AriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'

export const AracnaAriaList: ElementComponent<AriaListElement, AracnaAriaListProps> = createBaseElementComponent<
  AriaListElement,
  AriaListElementAttributes,
  AriaListElementEventMap
>('aracna-aria-list', AriaListElement)

export const AracnaAriaListItem: ElementComponent<AriaListItemElement, AracnaAriaListItemProps> = createBaseElementComponent<
  AriaListItemElement,
  AriaListItemElementAttributes,
  AriaListItemElementEventMap
>('aracna-aria-list-item', AriaListItemElement)
