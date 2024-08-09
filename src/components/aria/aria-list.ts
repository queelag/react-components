import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaListProps, AracnaAriaListItemProps } from '../../definitions/props.js'
import type {
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap
} from '@aracna/web-components'
import { AracnaAriaListElement, AracnaAriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'

export const AracnaAriaList: ElementComponent<AracnaAriaListElement, AracnaAriaListProps> = createBaseElementComponent<
  AracnaAriaListElement,
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap
>('aracna-aria-list', AracnaAriaListElement)

export const AracnaAriaListItem: ElementComponent<AracnaAriaListItemElement, AracnaAriaListItemProps> = createBaseElementComponent<
  AracnaAriaListItemElement,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap
>('aracna-aria-list-item', AracnaAriaListItemElement)
