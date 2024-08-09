import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaBreadcrumbProps, AracnaAracnaBreadcrumbItemProps, AracnaAracnaBreadcrumbListProps } from '../../definitions/props.js'
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

export const AracnaBreadcrumb: ElementComponent<AracnaBreadcrumbElement, AracnaAracnaBreadcrumbProps> = createBaseElementComponent<
  AracnaBreadcrumbElement,
  AracnaBreadcrumbElementAttributes,
  AracnaBreadcrumbElementEventMap
>('aracna-breadcrumb', AracnaBreadcrumbElement)

export const AracnaBreadcrumbItem: ElementComponent<AracnaBreadcrumbItemElement, AracnaAracnaBreadcrumbItemProps> = createBaseElementComponent<
  AracnaBreadcrumbItemElement,
  AracnaBreadcrumbItemElementAttributes,
  AracnaBreadcrumbItemElementEventMap
>('aracna-breadcrumb-item', AracnaBreadcrumbItemElement)

export const AracnaBreadcrumbList: ElementComponent<AracnaBreadcrumbListElement, AracnaAracnaBreadcrumbListProps> = createBaseElementComponent<
  AracnaBreadcrumbListElement,
  AracnaBreadcrumbListElementAttributes,
  AracnaBreadcrumbListElementEventMap
>('aracna-breadcrumb-list', AracnaBreadcrumbListElement)
