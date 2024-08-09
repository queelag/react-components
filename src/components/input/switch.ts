import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaSwitchProps } from '../../definitions/props.js'
import type { AracnaSwitchElementAttributes, AracnaSwitchElementEventMap } from '@aracna/web-components'
import { AracnaSwitchElement } from '@aracna/web-components/elements/input/switch-element'

export const AracnaSwitch: ElementComponent<AracnaSwitchElement, AracnaSwitchProps> = createFormControlElementComponent<
  AracnaSwitchElement,
  AracnaSwitchElementAttributes,
  AracnaSwitchElementEventMap
>('aracna-switch', AracnaSwitchElement)
