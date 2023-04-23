import {
  AriaMenuButtonProps,
  AriaMenuItemProps,
  AriaMenuProps,
  AriaMenuSubMenuProps,
  createBaseElementComponent,
  createFloatingElementComponent,
  ElementComponent
} from '@aracna/react'
import {
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap,
  AriaMenuElementAttributes,
  AriaMenuElementEventMap,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap
} from '@aracna/web'
import { AriaMenuButtonElement, AriaMenuElement, AriaMenuItemElement, AriaMenuSubMenuElement } from '@aracna/web-components/elements/aria/aria.menu.element.js'

export const AracnaAriaMenu: ElementComponent<AriaMenuElement, AriaMenuProps> = createBaseElementComponent<
  AriaMenuElement,
  AriaMenuElementAttributes<AriaMenuItemElement>,
  AriaMenuElementEventMap
>('aracna-aria-menu', AriaMenuElement)

export const AracnaAriaMenuButton: ElementComponent<AriaMenuButtonElement, AriaMenuButtonProps> = createBaseElementComponent<
  AriaMenuButtonElement,
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap
>('aracna-aria-menu-button', AriaMenuButtonElement)
export const AracnaAriaMenuItem: ElementComponent<AriaMenuItemElement, AriaMenuItemProps> = createBaseElementComponent<
  AriaMenuItemElement,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap
>('aracna-aria-menu-item', AriaMenuItemElement)

export const AracnaAriaMenuSubMenu: ElementComponent<AriaMenuSubMenuElement, AriaMenuSubMenuProps> = createFloatingElementComponent<
  AriaMenuSubMenuElement,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap
>('aracna-aria-menu-submenu', AriaMenuSubMenuElement)
