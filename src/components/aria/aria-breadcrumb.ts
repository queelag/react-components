import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaBreadcrumbProps, AracnaAriaBreadcrumbItemProps, AracnaAriaBreadcrumbListProps } from '@aracna/react'
import type {
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
} from '@aracna/web'
import { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@aracna/web-components/elements/aria/aria-breadcrumb-element'

export const AracnaAriaBreadcrumb: ElementComponent<AriaBreadcrumbElement, AracnaAriaBreadcrumbProps> = createBaseElementComponent<
  AriaBreadcrumbElement,
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap
>('aracna-aria-breadcrumb', AriaBreadcrumbElement)

export const AracnaAriaBreadcrumbItem: ElementComponent<AriaBreadcrumbItemElement, AracnaAriaBreadcrumbItemProps> = createBaseElementComponent<
  AriaBreadcrumbItemElement,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap
>('aracna-aria-breadcrumb-item', AriaBreadcrumbItemElement)

export const AracnaAriaBreadcrumbList: ElementComponent<AriaBreadcrumbListElement, AracnaAriaBreadcrumbListProps> = createBaseElementComponent<
  AriaBreadcrumbListElement,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
>('aracna-aria-breadcrumb-list', AriaBreadcrumbListElement)
