import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaCheckBoxProps } from '../../definitions/props.js'
import type { AracnaAriaCheckBoxElementAttributes, AracnaAriaCheckBoxElementEventMap } from '@aracna/web-components'
import { AracnaAriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'

export const AracnaAriaCheckBox: ElementComponent<AracnaAriaCheckBoxElement, AracnaAracnaAriaCheckBoxProps> = createFormControlElementComponent<
  AracnaAriaCheckBoxElement,
  AracnaAriaCheckBoxElementAttributes,
  AracnaAriaCheckBoxElementEventMap
>('aracna-aria-checkbox', AracnaAriaCheckBoxElement)
