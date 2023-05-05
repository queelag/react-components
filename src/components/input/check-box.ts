import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { CheckBoxProps } from '@aracna/react'
import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import { CheckBoxElement } from '@aracna/web-components/input/check-box'

export const AracnaCheckBox: ElementComponent<CheckBoxElement, CheckBoxProps> = createFormFieldElementComponent<
  CheckBoxElement,
  CheckBoxElementAttributes,
  CheckBoxElementEventMap
>('aracna-checkbox', CheckBoxElement)
