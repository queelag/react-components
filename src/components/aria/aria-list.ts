import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaListProps, AracnaAracnaAriaListItemProps } from '../../definitions/props.js'
import type {
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap
} from '@aracna/web-components'
import { AracnaAriaListElement, AracnaAriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'

export const AracnaAracnaAriaList: ElementComponent<AracnaAriaListElement, AracnaAracnaAriaListProps> = createBaseElementComponent<
  AracnaAriaListElement,
  AracnaAriaListElementAttributes,
  AracnaAriaListElementEventMap
>('aracna-aria-list', AracnaAriaListElement)

export const AracnaAracnaAriaListItem: ElementComponent<AracnaAriaListItemElement, AracnaAracnaAriaListItemProps> = createBaseElementComponent<
  AracnaAriaListItemElement,
  AracnaAriaListItemElementAttributes,
  AracnaAriaListItemElementEventMap
>('aracna-aria-list-item', AracnaAriaListItemElement)
