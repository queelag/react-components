import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { MenuProps, MenuButtonProps, MenuItemProps, MenuSubMenuProps } from '@aracna/react'
import type {
  MenuElementAttributes,
  MenuElementEventMap,
  MenuButtonElementAttributes,
  MenuButtonElementEventMap,
  MenuItemElementAttributes,
  MenuItemElementEventMap,
  MenuSubMenuElementAttributes,
  MenuSubMenuElementEventMap
} from '@aracna/web'
import { MenuElement, MenuButtonElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu-element'

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
