import { BreadcrumbItemProps, BreadcrumbListProps, BreadcrumbProps, createElementComponent, ElementComponent } from '@queelag/react'
import { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@queelag/web-components/elements/navigation/breadcrumb.element.js'

export const QBreadcrumb: ElementComponent<BreadcrumbElement, BreadcrumbProps> = createElementComponent('q-breadcrumb', BreadcrumbElement)
export const QBreadcrumbItem: ElementComponent<BreadcrumbItemElement, BreadcrumbItemProps> = createElementComponent('q-breadcrumb-item', BreadcrumbItemElement)
export const QBreadcrumbList: ElementComponent<BreadcrumbListElement, BreadcrumbListProps> = createElementComponent('q-breadcrumb-list', BreadcrumbListElement)
