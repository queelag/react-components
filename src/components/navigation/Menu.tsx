import {
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent,
  MenuButtonProps,
  MenuItemProps,
  MenuProps,
  MenuSubMenuProps
} from '@queelag/react'
import { MenuButtonElement, MenuElement, MenuItemElement, MenuSubMenuElement } from '@queelag/web-components/elements/navigation/menu.element.js'

export const QMenu: ElementComponent<MenuElement, MenuProps> = createBaseElementComponent('q-menu', MenuElement)
export const QMenuButton: ElementComponent<MenuButtonElement, MenuButtonProps> = createBaseElementComponent('q-menu-button', MenuButtonElement)
export const QMenuItem: ElementComponent<MenuItemElement, MenuItemProps> = createBaseElementComponent('q-menu-item', MenuItemElement)
export const QMenuSubMenu: ElementComponent<MenuSubMenuElement, MenuSubMenuProps> = createFloatingElementComponent('q-menu-submenu', MenuSubMenuElement)
