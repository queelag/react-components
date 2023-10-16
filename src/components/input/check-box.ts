import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaCheckBoxProps } from '@aracna/react'
import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export const AracnaCheckBox: ElementComponent<CheckBoxElement, AracnaCheckBoxProps> = createFormFieldElementComponent<
  CheckBoxElement,
  CheckBoxElementAttributes,
  CheckBoxElementEventMap
>('aracna-checkbox', CheckBoxElement)
