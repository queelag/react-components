import type { AriaCheckBoxProps, ElementComponent } from '@aracna/react'
import { createFormFieldElementComponent } from '@aracna/react'
import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'

export const AracnaAriaCheckBox: ElementComponent<AriaCheckBoxElement, AriaCheckBoxProps> = createFormFieldElementComponent<
  AriaCheckBoxElement,
  AriaCheckBoxElementAttributes,
  AriaCheckBoxElementEventMap
>('aracna-aria-checkbox', AriaCheckBoxElement)
