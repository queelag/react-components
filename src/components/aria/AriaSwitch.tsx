import { AriaSwitchProps, createFormFieldElementComponent, ElementComponent } from '@aracna/react'
import { AriaSwitchElementAttributes, AriaSwitchElementEventMap } from '@aracna/web'
import { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria.switch.element.js'

export const AracnaAriaSwitch: ElementComponent<AriaSwitchElement, AriaSwitchProps> = createFormFieldElementComponent<
  AriaSwitchElement,
  AriaSwitchElementAttributes,
  AriaSwitchElementEventMap
>('aracna-aria-switch', AriaSwitchElement)
