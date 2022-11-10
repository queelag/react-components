import { createFormFieldElementComponent, ElementComponent, SwitchProps } from '@queelag/react'
import { SwitchElement } from '@queelag/web-components/elements/input/switch.element.js'

export const QSwitch: ElementComponent<SwitchElement, SwitchProps> = createFormFieldElementComponent('q-switch', SwitchElement)
