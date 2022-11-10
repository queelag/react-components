import { AriaBreadcrumbItemProps, AriaBreadcrumbListProps, AriaBreadcrumbProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@queelag/web-components/elements/aria/aria.breadcrumb.element.js'

export const QAriaBreadcrumb: ElementComponent<AriaBreadcrumbElement, AriaBreadcrumbProps> = createBaseElementComponent(
  'q-aria-breadcrumb',
  AriaBreadcrumbElement
)

export const QAriaBreadcrumbItem: ElementComponent<AriaBreadcrumbItemElement, AriaBreadcrumbItemProps> = createBaseElementComponent(
  'q-aria-breadcrumb-item',
  AriaBreadcrumbItemElement
)

export const QAriaBreadcrumbList: ElementComponent<AriaBreadcrumbListElement, AriaBreadcrumbListProps> = createBaseElementComponent(
  'q-aria-breadcrumb-list',
  AriaBreadcrumbListElement
)
