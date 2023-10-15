import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { ButtonProps } from '@aracna/react'
import type { ButtonElementAttributes, ButtonElementEventMap } from '@aracna/web'
import { ButtonElement } from '@aracna/web-components/elements/input/button-element'

export const AracnaButton: ElementComponent<ButtonElement, ButtonProps> = createBaseElementComponent<
  ButtonElement,
  ButtonElementAttributes,
  ButtonElementEventMap
>('aracna-button', ButtonElement, ['button-click'])
