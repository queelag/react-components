import { BreadcrumbItemProps, BreadcrumbListProps, BreadcrumbProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import {
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
} from '@aracna/web'
import { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb.element'

export const AracnaBreadcrumb: ElementComponent<BreadcrumbElement, BreadcrumbProps> = createBaseElementComponent<
  BreadcrumbElement,
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap
>('aracna-breadcrumb', BreadcrumbElement)

export const AracnaBreadcrumbItem: ElementComponent<BreadcrumbItemElement, BreadcrumbItemProps> = createBaseElementComponent<
  BreadcrumbItemElement,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap
>('aracna-breadcrumb-item', BreadcrumbItemElement)

export const AracnaBreadcrumbList: ElementComponent<BreadcrumbListElement, BreadcrumbListProps> = createBaseElementComponent<
  BreadcrumbListElement,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
>('aracna-breadcrumb-list', BreadcrumbListElement)
