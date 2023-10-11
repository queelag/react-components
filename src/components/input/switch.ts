import type { ElementComponent, SwitchProps } from '@aracna/react'
import { createFormFieldElementComponent } from '@aracna/react'
import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import { SwitchElement } from '@aracna/web-components/elements/input/switch-element'

export const AracnaSwitch: ElementComponent<SwitchElement, SwitchProps> = createFormFieldElementComponent<
  SwitchElement,
  SwitchElementAttributes,
  SwitchElementEventMap
>('aracna-switch', SwitchElement)
