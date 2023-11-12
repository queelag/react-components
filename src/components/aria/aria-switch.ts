import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaSwitchProps } from '@aracna/react'
import type { AriaSwitchElementAttributes, AriaSwitchElementEventMap } from '@aracna/web'
import { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'

export const AracnaAriaSwitch: ElementComponent<AriaSwitchElement, AracnaAriaSwitchProps> = createFormControlElementComponent<
  AriaSwitchElement,
  AriaSwitchElementAttributes,
  AriaSwitchElementEventMap
>('aracna-aria-switch', AriaSwitchElement)
