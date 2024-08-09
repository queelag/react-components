import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaBreadcrumbProps, AracnaAracnaAriaBreadcrumbItemProps, AracnaAracnaAriaBreadcrumbListProps } from '../../definitions/props.js'
import type {
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbListElement
} from '@aracna/web-components/elements/aria/aria-breadcrumb-element'

export const AracnaAriaBreadcrumb: ElementComponent<AracnaAriaBreadcrumbElement, AracnaAracnaAriaBreadcrumbProps> = createBaseElementComponent<
  AracnaAriaBreadcrumbElement,
  AracnaAriaBreadcrumbElementAttributes,
  AracnaAriaBreadcrumbElementEventMap
>('aracna-aria-breadcrumb', AracnaAriaBreadcrumbElement)

export const AracnaAriaBreadcrumbItem: ElementComponent<AracnaAriaBreadcrumbItemElement, AracnaAracnaAriaBreadcrumbItemProps> = createBaseElementComponent<
  AracnaAriaBreadcrumbItemElement,
  AracnaAriaBreadcrumbItemElementAttributes,
  AracnaAriaBreadcrumbItemElementEventMap
>('aracna-aria-breadcrumb-item', AracnaAriaBreadcrumbItemElement)

export const AracnaAriaBreadcrumbList: ElementComponent<AracnaAriaBreadcrumbListElement, AracnaAracnaAriaBreadcrumbListProps> = createBaseElementComponent<
  AracnaAriaBreadcrumbListElement,
  AracnaAriaBreadcrumbListElementAttributes,
  AracnaAriaBreadcrumbListElementEventMap
>('aracna-aria-breadcrumb-list', AracnaAriaBreadcrumbListElement)
