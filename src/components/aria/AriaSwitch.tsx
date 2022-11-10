import { AriaSwitchProps, createFormFieldElementComponent, ElementComponent } from '@queelag/react'
import { AriaSwitchElement } from '@queelag/web-components/elements/aria/aria.switch.element.js'

export const QAriaSwitch: ElementComponent<AriaSwitchElement, AriaSwitchProps> = createFormFieldElementComponent('q-aria-switch', AriaSwitchElement)
