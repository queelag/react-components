import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaSwitchProps } from '../../definitions/props.js'
import type { AracnaSwitchElementAttributes, AracnaSwitchElementEventMap } from '@aracna/web-components'
import { AracnaSwitchElement } from '@aracna/web-components/elements/input/switch-element'

export const AracnaSwitch: ElementComponent<AracnaSwitchElement, AracnaSwitchProps> = createFormControlElementComponent<
  AracnaSwitchElement,
  AracnaSwitchElementAttributes,
  AracnaSwitchElementEventMap
>('aracna-switch', AracnaSwitchElement, ['switch-off', 'switch-on'])
