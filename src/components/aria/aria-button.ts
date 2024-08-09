import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaButtonProps } from '../../definitions/props.js'
import type { AracnaAriaButtonElementAttributes, AracnaAriaButtonElementEventMap } from '@aracna/web-components'
import { AracnaAriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export const AracnaAracnaAriaButton: ElementComponent<AracnaAriaButtonElement, AracnaAracnaAriaButtonProps> = createBaseElementComponent<
  AracnaAriaButtonElement,
  AracnaAriaButtonElementAttributes,
  AracnaAriaButtonElementEventMap
>('aracna-aria-button', AracnaAriaButtonElement)
