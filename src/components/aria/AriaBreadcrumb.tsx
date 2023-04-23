import { AriaBreadcrumbItemProps, AriaBreadcrumbListProps, AriaBreadcrumbProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import {
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
} from '@aracna/web'
import { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@aracna/web-components/elements/aria/aria.breadcrumb.element.js'

export const AracnaAriaBreadcrumb: ElementComponent<AriaBreadcrumbElement, AriaBreadcrumbProps> = createBaseElementComponent<
  AriaBreadcrumbElement,
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap
>('aracna-aria-breadcrumb', AriaBreadcrumbElement)

export const AracnaAriaBreadcrumbItem: ElementComponent<AriaBreadcrumbItemElement, AriaBreadcrumbItemProps> = createBaseElementComponent<
  AriaBreadcrumbItemElement,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap
>('aracna-aria-breadcrumb-item', AriaBreadcrumbItemElement)

export const AracnaAriaBreadcrumbList: ElementComponent<AriaBreadcrumbListElement, AriaBreadcrumbListProps> = createBaseElementComponent<
  AriaBreadcrumbListElement,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
>('aracna-aria-breadcrumb-list', AriaBreadcrumbListElement)
