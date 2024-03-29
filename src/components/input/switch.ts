import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaSwitchProps } from '@aracna/react'
import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import { SwitchElement } from '@aracna/web-components/elements/input/switch-element'

export const AracnaSwitch: ElementComponent<SwitchElement, AracnaSwitchProps> = createFormControlElementComponent<
  SwitchElement,
  SwitchElementAttributes,
  SwitchElementEventMap
>('aracna-switch', SwitchElement)
