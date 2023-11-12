import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaCheckBoxProps } from '@aracna/react'
import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'

export const AracnaAriaCheckBox: ElementComponent<AriaCheckBoxElement, AracnaAriaCheckBoxProps> = createFormControlElementComponent<
  AriaCheckBoxElement,
  AriaCheckBoxElementAttributes,
  AriaCheckBoxElementEventMap
>('aracna-aria-checkbox', AriaCheckBoxElement)
