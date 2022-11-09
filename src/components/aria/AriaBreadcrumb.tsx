import { AriaBreadcrumbItemProps, AriaBreadcrumbListProps, AriaBreadcrumbProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@queelag/web-components/elements/aria/aria.breadcrumb.element'

export const QAriaBreadcrumb: ElementComponent<AriaBreadcrumbElement, AriaBreadcrumbProps> = createElementComponent('q-aria-breadcrumb', AriaBreadcrumbElement)

export const QAriaBreadcrumbItem: ElementComponent<AriaBreadcrumbItemElement, AriaBreadcrumbItemProps> = createElementComponent(
  'q-aria-breadcrumb-item',
  AriaBreadcrumbItemElement
)

export const QAriaBreadcrumbList: ElementComponent<AriaBreadcrumbListElement, AriaBreadcrumbListProps> = createElementComponent(
  'q-aria-breadcrumb-list',
  AriaBreadcrumbListElement
)
