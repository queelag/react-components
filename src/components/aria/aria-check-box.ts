import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaCheckBoxProps } from '@aracna/react'
import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element.js'

export const AracnaAriaCheckBox: ElementComponent<AriaCheckBoxElement, AriaCheckBoxProps> = createFormFieldElementComponent<
  AriaCheckBoxElement,
  AriaCheckBoxElementAttributes,
  AriaCheckBoxElementEventMap
>('aracna-aria-checkbox', AriaCheckBoxElement)
