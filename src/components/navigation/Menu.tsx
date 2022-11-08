import { createElementComponent, ElementComponent, MenuButtonProps, MenuItemProps, MenuProps, MenuSubMenuProps } from '@queelag/react'
import { MenuButtonElement, MenuElement, MenuItemElement, MenuSubMenuElement } from '@queelag/web-components'

export const QMenu: ElementComponent<MenuElement, MenuProps> = createElementComponent('q-menu', MenuElement)
export const QMenuButton: ElementComponent<MenuButtonElement, MenuButtonProps> = createElementComponent('q-menu-button', MenuButtonElement)
export const QMenuItem: ElementComponent<MenuItemElement, MenuItemProps> = createElementComponent('q-menu-item', MenuItemElement)
export const QMenuSubMenu: ElementComponent<MenuSubMenuElement, MenuSubMenuProps> = createElementComponent('q-menu-submenu', MenuSubMenuElement)
