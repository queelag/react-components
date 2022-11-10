import { BreadcrumbItemProps, BreadcrumbListProps, BreadcrumbProps, createBaseElementComponent, ElementComponent } from '@queelag/react'
import { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@queelag/web-components/elements/navigation/breadcrumb.element.js'

export const QBreadcrumb: ElementComponent<BreadcrumbElement, BreadcrumbProps> = createBaseElementComponent('q-breadcrumb', BreadcrumbElement)
export const QBreadcrumbItem: ElementComponent<BreadcrumbItemElement, BreadcrumbItemProps> = createBaseElementComponent(
  'q-breadcrumb-item',
  BreadcrumbItemElement
)
export const QBreadcrumbList: ElementComponent<BreadcrumbListElement, BreadcrumbListProps> = createBaseElementComponent(
  'q-breadcrumb-list',
  BreadcrumbListElement
)
