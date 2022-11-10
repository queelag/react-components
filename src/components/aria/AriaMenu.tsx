import {
  AriaMenuButtonProps,
  AriaMenuItemProps,
  AriaMenuProps,
  AriaMenuSubMenuProps,
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent
} from '@queelag/react'
import { AriaMenuButtonElement, AriaMenuElement, AriaMenuItemElement, AriaMenuSubMenuElement } from '@queelag/web-components/elements/aria/aria.menu.element.js'

export const QAriaMenu: ElementComponent<AriaMenuElement, AriaMenuProps> = createBaseElementComponent('q-aria-menu', AriaMenuElement)
export const QAriaMenuButton: ElementComponent<AriaMenuButtonElement, AriaMenuButtonProps> = createBaseElementComponent(
  'q-aria-menu-button',
  AriaMenuButtonElement
)
export const QAriaMenuItem: ElementComponent<AriaMenuItemElement, AriaMenuItemProps> = createBaseElementComponent('q-aria-menu-item', AriaMenuItemElement)

export const QAriaMenuSubMenu: ElementComponent<AriaMenuSubMenuElement, AriaMenuSubMenuProps> = createFloatingElementComponent(
  'q-aria-menu-submenu',
  AriaMenuSubMenuElement
)
