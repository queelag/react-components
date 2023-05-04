import { CheckBoxProps, createFormFieldElementComponent, ElementComponent } from '@aracna/react'
import { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import { CheckBoxElement } from '@aracna/web-components/elements/input/check.box.element.js'

export const AracnaCheckBox: ElementComponent<CheckBoxElement, CheckBoxProps> = createFormFieldElementComponent<
  CheckBoxElement,
  CheckBoxElementAttributes,
  CheckBoxElementEventMap
>('aracna-checkbox', CheckBoxElement)
