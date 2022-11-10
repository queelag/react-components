import { CheckBoxProps, createFormFieldElementComponent, ElementComponent } from '@queelag/react'
import { CheckBoxElement } from '@queelag/web-components/elements/input/check.box.element.js'

export const QCheckBox: ElementComponent<CheckBoxElement, CheckBoxProps> = createFormFieldElementComponent('q-checkbox', CheckBoxElement)
