import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaButtonGroupProps } from '@aracna/react'
import type { ButtonGroupElementAttributes, ButtonGroupElementEventMap } from '@aracna/web'
import { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'

export const AracnaButtonGroup: ElementComponent<ButtonGroupElement, AracnaButtonGroupProps> = createBaseElementComponent<
  ButtonGroupElement,
  ButtonGroupElementAttributes,
  ButtonGroupElementEventMap
>('aracna-button-group', ButtonGroupElement)
