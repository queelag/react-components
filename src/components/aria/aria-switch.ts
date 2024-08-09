import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaSwitchProps } from '../../definitions/props.js'
import type { AracnaAriaSwitchElementAttributes, AracnaAriaSwitchElementEventMap } from '@aracna/web-components'
import { AracnaAriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'

export const AracnaAriaSwitch: ElementComponent<AracnaAriaSwitchElement, AracnaAracnaAriaSwitchProps> = createFormControlElementComponent<
  AracnaAriaSwitchElement,
  AracnaAriaSwitchElementAttributes,
  AracnaAriaSwitchElementEventMap
>('aracna-aria-switch', AracnaAriaSwitchElement)
