import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaBreadcrumbProps, AracnaBreadcrumbItemProps, AracnaBreadcrumbListProps } from '../../definitions/props.js'
import type {
  AracnaBreadcrumbElementAttributes,
  AracnaBreadcrumbElementEventMap,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap
} from '@aracna/web-components'
import {
  AracnaBreadcrumbElement,
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbListElement
} from '@aracna/web-components/elements/navigation/breadcrumb-element'

export const AracnaBreadcrumb: ElementComponent<AracnaBreadcrumbElement, AracnaBreadcrumbProps> = createBaseElementComponent<
  AracnaBreadcrumbElement,
  AracnaBreadcrumbElementAttributes,
  AracnaBreadcrumbElementEventMap
>('aracna-breadcrumb', AracnaBreadcrumbElement)

export const AracnaBreadcrumbItem: ElementComponent<AracnaBreadcrumbItemElement, AracnaBreadcrumbItemProps> = createBaseElementComponent<
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap
>('aracna-breadcrumb-item', AracnaBreadcrumbItemElement)

export const AracnaBreadcrumbList: ElementComponent<AracnaBreadcrumbListElement, AracnaBreadcrumbListProps> = createBaseElementComponent<
  AracnaBreadcrumbListElement,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap
>('aracna-breadcrumb-list', AracnaBreadcrumbListElement)
