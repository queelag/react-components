import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { ButtonGroupProps } from '@aracna/react'
import type { ButtonGroupElementAttributes, ButtonGroupElementEventMap } from '@aracna/web'
import { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element.js'

export const AracnaButtonGroup: ElementComponent<ButtonGroupElement, ButtonGroupProps> = createBaseElementComponent<
  ButtonGroupElement,
  ButtonGroupElementAttributes,
  ButtonGroupElementEventMap
>('aracna-button-group', ButtonGroupElement)
