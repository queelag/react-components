import { AriaButtonProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import { AriaButtonElement } from '@aracna/web-components/elements/aria/aria.button.element.js'

export const AracnaAriaButton: ElementComponent<AriaButtonElement, AriaButtonProps> = createBaseElementComponent<
  AriaButtonElement,
  AriaButtonElementAttributes,
  AriaButtonElementEventMap
>('aracna-aria-button', AriaButtonElement)
