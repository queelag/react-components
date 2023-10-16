import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaBreadcrumbProps, AracnaBreadcrumbItemProps, AracnaBreadcrumbListProps } from '@aracna/react'
import type {
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
} from '@aracna/web'
import { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb-element'

export const AracnaBreadcrumb: ElementComponent<BreadcrumbElement, AracnaBreadcrumbProps> = createBaseElementComponent<
  BreadcrumbElement,
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap
>('aracna-breadcrumb', BreadcrumbElement)

export const AracnaBreadcrumbItem: ElementComponent<BreadcrumbItemElement, AracnaBreadcrumbItemProps> = createBaseElementComponent<
  BreadcrumbItemElement,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap
>('aracna-breadcrumb-item', BreadcrumbItemElement)

export const AracnaBreadcrumbList: ElementComponent<BreadcrumbListElement, AracnaBreadcrumbListProps> = createBaseElementComponent<
  BreadcrumbListElement,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
>('aracna-breadcrumb-list', BreadcrumbListElement)
