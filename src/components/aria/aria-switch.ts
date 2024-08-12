import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaAriaSwitchProps } from '../../definitions/props.js'
import type { AracnaAriaSwitchElementAttributes, AracnaAriaSwitchElementEventMap } from '@aracna/web-components'
import { AracnaAriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'

export const AracnaAriaSwitch: ElementComponent<AracnaAriaSwitchElement, AracnaAriaSwitchProps> = createFormControlElementComponent<
  AracnaAriaSwitchElement,
  AracnaAriaSwitchElementAttributes,
  AracnaAriaSwitchElementEventMap
>('aracna-aria-switch', AracnaAriaSwitchElement, ['switch-off', 'switch-on'])
