import { createElementComponent, ElementComponent, SwitchProps } from '@queelag/react'
import { SwitchElement } from '@queelag/web-components/elements/input/switch.element.js'

export const QSwitch: ElementComponent<SwitchElement, SwitchProps> = createElementComponent('q-switch', SwitchElement)
