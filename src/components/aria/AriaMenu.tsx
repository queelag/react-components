import { AriaMenuButtonProps, AriaMenuItemProps, AriaMenuProps, AriaMenuSubMenuProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaMenuButtonElement, AriaMenuElement, AriaMenuItemElement, AriaMenuSubMenuElement } from '@queelag/web-components'

export const QAriaMenu: ElementComponent<AriaMenuElement, AriaMenuProps> = createElementComponent('q-aria-menu', AriaMenuElement)
export const QAriaMenuButton: ElementComponent<AriaMenuButtonElement, AriaMenuButtonProps> = createElementComponent('q-aria-menu-button', AriaMenuButtonElement)
export const QAriaMenuItem: ElementComponent<AriaMenuItemElement, AriaMenuItemProps> = createElementComponent('q-aria-menu-item', AriaMenuItemElement)

export const QAriaMenuSubMenu: ElementComponent<AriaMenuSubMenuElement, AriaMenuSubMenuProps> = createElementComponent(
  'q-aria-menu-submenu',
  AriaMenuSubMenuElement
)
