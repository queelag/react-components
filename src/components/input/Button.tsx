import { ButtonProps, createBaseElementComponent, ElementComponent } from '@aracna/react'
import { ButtonElementAttributes, ButtonElementEventMap } from '@aracna/web'
import { ButtonElement } from '@aracna/web-components/elements/input/button.element'

export const AracnaButton: ElementComponent<ButtonElement, ButtonProps> = createBaseElementComponent<
  ButtonElement,
  ButtonElementAttributes,
  ButtonElementEventMap
>('aracna-button', ButtonElement)
