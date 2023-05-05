import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaButtonProps } from '@aracna/react'
import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import { AriaButtonElement } from '@aracna/web-components/aria/aria-button'

export const AracnaAriaButton: ElementComponent<AriaButtonElement, AriaButtonProps> = createBaseElementComponent<
  AriaButtonElement,
  AriaButtonElementAttributes,
  AriaButtonElementEventMap
>('aracna-aria-button', AriaButtonElement)
