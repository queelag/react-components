import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaAriaButtonProps } from '../../definitions/props.js'
import type { AracnaAriaButtonElementAttributes, AracnaAriaButtonElementEventMap } from '@aracna/web-components'
import { AracnaAriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export const AracnaAriaButton: ElementComponent<AracnaAriaButtonElement, AracnaAriaButtonProps> = createBaseElementComponent<
  AracnaAriaButtonElement,
  AracnaAriaButtonElementAttributes,
  AracnaAriaButtonElementEventMap
>('aracna-aria-button', AracnaAriaButtonElement)
