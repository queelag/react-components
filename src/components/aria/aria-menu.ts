import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaMenuProps, AriaMenuButtonProps, AriaMenuItemProps, AriaMenuSubMenuProps } from '@aracna/react'
import type {
  AriaMenuElementAttributes,
  AriaMenuElementEventMap,
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap
} from '@aracna/web'
import { AriaMenuElement, AriaMenuButtonElement, AriaMenuItemElement, AriaMenuSubMenuElement } from '@aracna/web-components/aria/aria-menu'

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
