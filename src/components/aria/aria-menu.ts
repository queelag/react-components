import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFloatingElementComponent } from '../../functions/create-floating-element-component.js'
import type { AracnaAriaMenuProps, AracnaAriaMenuButtonProps, AracnaAriaMenuItemProps, AracnaAriaMenuSubMenuProps } from '../../definitions/props.js'
import type {
  AracnaAriaMenuElementAttributes,
  AracnaAriaMenuElementEventMap,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaMenuElement,
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuItemElement,
  AracnaAriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element'

export const AracnaAriaMenu: ElementComponent<AracnaAriaMenuElement, AracnaAriaMenuProps> = createBaseElementComponent<
  AracnaAriaMenuElement,
  AracnaAriaMenuElementAttributes<AracnaAriaMenuItemElement>,
  AracnaAriaMenuElementEventMap
>('aracna-aria-menu', AracnaAriaMenuElement)

export const AracnaAriaMenuButton: ElementComponent<AracnaAriaMenuButtonElement, AracnaAriaMenuButtonProps> = createBaseElementComponent<
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap
>('aracna-aria-menu-button', AracnaAriaMenuButtonElement)

export const AracnaAriaMenuItem: ElementComponent<AracnaAriaMenuItemElement, AracnaAriaMenuItemProps> = createBaseElementComponent<
  AracnaAriaMenuItemElement,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap
>('aracna-aria-menu-item', AracnaAriaMenuItemElement)

export const AracnaAriaMenuSubMenu: ElementComponent<AracnaAriaMenuSubMenuElement, AracnaAriaMenuSubMenuProps> = createFloatingElementComponent<
  AracnaAriaMenuSubMenuElement,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
>('aracna-aria-menu-submenu', AracnaAriaMenuSubMenuElement, ['collapse', 'expand'])
