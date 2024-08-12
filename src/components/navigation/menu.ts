import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type { AracnaMenuProps, AracnaMenuButtonProps, AracnaMenuItemProps, AracnaMenuSubMenuProps } from '../../definitions/props.js'
import type {
  AracnaMenuElementAttributes,
  AracnaMenuElementEventMap,
  AracnaMenuButtonElementAttributes,
  AracnaMenuButtonElementEventMap,
  AracnaMenuItemElementAttributes,
  AracnaMenuItemElementEventMap,
  AracnaMenuSubMenuElementAttributes,
  AracnaMenuSubMenuElementEventMap
} from '@aracna/web-components'
import {
  AracnaMenuElement,
  AracnaMenuButtonElement,
  AracnaMenuItemElement,
  AracnaMenuSubMenuElement
} from '@aracna/web-components/elements/navigation/menu-element'

export const AracnaMenu: ElementComponent<AracnaMenuElement, AracnaMenuProps> = createBaseElementComponent<
  AracnaMenuElement,
  AracnaMenuElementAttributes<AracnaMenuItemElement>,
  AracnaMenuElementEventMap
>('aracna-menu', AracnaMenuElement)

export const AracnaMenuButton: ElementComponent<AracnaMenuButtonElement, AracnaMenuButtonProps> = createBaseElementComponent<
  AracnaMenuButtonElement,
  AracnaMenuButtonElementAttributes,
  AracnaMenuButtonElementEventMap
>('aracna-menu-button', AracnaMenuButtonElement)

export const AracnaMenuItem: ElementComponent<AracnaMenuItemElement, AracnaMenuItemProps> = createBaseElementComponent<
  AracnaMenuItemElement,
  AracnaMenuItemElementAttributes,
  AracnaMenuItemElementEventMap
>('aracna-menu-item', AracnaMenuItemElement)

export const AracnaMenuSubMenu: ElementComponent<AracnaMenuSubMenuElement, AracnaMenuSubMenuProps> = createFloatingElementComponent<
  AracnaMenuSubMenuElement,
  AracnaMenuSubMenuElementAttributes,
  AracnaMenuSubMenuElementEventMap
>('aracna-menu-submenu', AracnaMenuSubMenuElement, ['collapse', 'expand'])
