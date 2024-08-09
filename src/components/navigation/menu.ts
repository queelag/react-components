import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaMenuProps, AracnaAracnaMenuButtonProps, AracnaAracnaMenuItemProps, AracnaAracnaMenuSubMenuProps } from '../../definitions/props.js'
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

export const AracnaMenu: ElementComponent<AracnaMenuElement, AracnaAracnaMenuProps> = createBaseElementComponent<
  AracnaMenuElement,
  AracnaMenuElementAttributes<AracnaMenuItemElement>,
  AracnaMenuElementEventMap
>('aracna-menu', AracnaMenuElement)

export const AracnaMenuButton: ElementComponent<AracnaMenuButtonElement, AracnaAracnaMenuButtonProps> = createBaseElementComponent<
  AracnaMenuButtonElement,
  AracnaMenuButtonElementAttributes,
  AracnaMenuButtonElementEventMap
>('aracna-menu-button', AracnaMenuButtonElement)

export const AracnaMenuItem: ElementComponent<AracnaMenuItemElement, AracnaAracnaMenuItemProps> = createBaseElementComponent<
  AracnaMenuItemElement,
  AracnaMenuItemElementAttributes,
  AracnaMenuItemElementEventMap
>('aracna-menu-item', AracnaMenuItemElement)

export const AracnaMenuSubMenu: ElementComponent<AracnaMenuSubMenuElement, AracnaAracnaMenuSubMenuProps> = createFloatingElementComponent<
  AracnaMenuSubMenuElement,
  AracnaMenuSubMenuElementAttributes,
  AracnaMenuSubMenuElementEventMap
>('aracna-menu-submenu', AracnaMenuSubMenuElement)
