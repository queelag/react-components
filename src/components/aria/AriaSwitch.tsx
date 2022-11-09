import { AriaSwitchProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaSwitchElement } from '@queelag/web-components/elements/aria/aria.switch.element'

export const QAriaSwitch: ElementComponent<AriaSwitchElement, AriaSwitchProps> = createElementComponent('q-aria-switch', AriaSwitchElement)
