import {
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent,
  MenuButtonProps,
  MenuItemProps,
  MenuProps,
  MenuSubMenuProps
} from '@aracna/react'
import {
  MenuButtonElementAttributes,
  MenuButtonElementEventMap,
  MenuElementAttributes,
  MenuElementEventMap,
  MenuItemElementAttributes,
  MenuItemElementEventMap,
  MenuSubMenuElementAttributes,
  MenuSubMenuElementEventMap
} from '@aracna/web'
import { MenuButtonElement, MenuElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu.element.js'

export const AracnaMenu: ElementComponent<MenuElement, MenuProps> = createBaseElementComponent<
  MenuElement,
  MenuElementAttributes<MenuItemElement>,
  MenuElementEventMap
>('aracna-menu', MenuElement)

export const AracnaMenuButton: ElementComponent<MenuButtonElement, MenuButtonProps> = createBaseElementComponent<
  MenuButtonElement,
  MenuButtonElementAttributes,
  MenuButtonElementEventMap
>('aracna-menu-button', MenuButtonElement)

export const AracnaMenuItem: ElementComponent<MenuItemElement, MenuItemProps> = createBaseElementComponent<
  MenuItemElement,
  MenuItemElementAttributes,
  MenuItemElementEventMap
>('aracna-menu-item', MenuItemElement)

export const AracnaMenuSubMenu: ElementComponent<MenuSubMenuElement, MenuSubMenuProps> = createFloatingElementComponent<
  MenuSubMenuElement,
  MenuSubMenuElementAttributes,
  MenuSubMenuElementEventMap
>('aracna-menu-submenu', MenuSubMenuElement)
