import { CheckBoxProps, createElementComponent, ElementComponent } from '@queelag/react'
import { CheckBoxElement } from '@queelag/web-components'

export const QCheckBox: ElementComponent<CheckBoxElement, CheckBoxProps> = createElementComponent('q-checkbox', CheckBoxElement)
