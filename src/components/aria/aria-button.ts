import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaButtonProps } from '@aracna/react'
import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export const AracnaAriaButton: ElementComponent<AriaButtonElement, AracnaAriaButtonProps> = createBaseElementComponent<
  AriaButtonElement,
  AriaButtonElementAttributes,
  AriaButtonElementEventMap
>('aracna-aria-button', AriaButtonElement)
