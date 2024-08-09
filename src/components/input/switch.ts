import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaSwitchProps } from '../../definitions/props.js'
import type { AracnaSwitchElementAttributes, AracnaSwitchElementEventMap } from '@aracna/web-components'
import { AracnaSwitchElement } from '@aracna/web-components/elements/input/switch-element'

export const AracnaAracnaSwitch: ElementComponent<AracnaSwitchElement, AracnaAracnaSwitchProps> = createFormControlElementComponent<
  AracnaSwitchElement,
  AracnaSwitchElementAttributes,
  AracnaSwitchElementEventMap
>('aracna-switch', AracnaSwitchElement)
