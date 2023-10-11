import type { CheckBoxProps, ElementComponent } from '@aracna/react'
import { createFormFieldElementComponent } from '@aracna/react'
import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export const AracnaCheckBox: ElementComponent<CheckBoxElement, CheckBoxProps> = createFormFieldElementComponent<
  CheckBoxElement,
  CheckBoxElementAttributes,
  CheckBoxElementEventMap
>('aracna-checkbox', CheckBoxElement)
