import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaMenuProps, AracnaAriaMenuButtonProps, AracnaAriaMenuItemProps, AracnaAriaMenuSubMenuProps } from '@aracna/react'
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
import { AriaMenuElement, AriaMenuButtonElement, AriaMenuItemElement, AriaMenuSubMenuElement } from '@aracna/web-components/elements/aria/aria-menu-element'

export const AracnaAriaMenu: ElementComponent<AriaMenuElement, AracnaAriaMenuProps> = createBaseElementComponent<
  AriaMenuElement,
  AriaMenuElementAttributes<AriaMenuItemElement>,
  AriaMenuElementEventMap
>('aracna-aria-menu', AriaMenuElement)

export const AracnaAriaMenuButton: ElementComponent<AriaMenuButtonElement, AracnaAriaMenuButtonProps> = createBaseElementComponent<
  AriaMenuButtonElement,
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap
>('aracna-aria-menu-button', AriaMenuButtonElement)

export const AracnaAriaMenuItem: ElementComponent<AriaMenuItemElement, AracnaAriaMenuItemProps> = createBaseElementComponent<
  AriaMenuItemElement,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap
>('aracna-aria-menu-item', AriaMenuItemElement)

export const AracnaAriaMenuSubMenu: ElementComponent<AriaMenuSubMenuElement, AracnaAriaMenuSubMenuProps> = createFloatingElementComponent<
  AriaMenuSubMenuElement,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap
>('aracna-aria-menu-submenu', AriaMenuSubMenuElement)
