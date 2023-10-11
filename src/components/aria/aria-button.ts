import type { AriaButtonProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export const AracnaAriaButton: ElementComponent<AriaButtonElement, AriaButtonProps> = createBaseElementComponent<
  AriaButtonElement,
  AriaButtonElementAttributes,
  AriaButtonElementEventMap
>('aracna-aria-button', AriaButtonElement)
