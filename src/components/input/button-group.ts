import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaButtonGroupProps } from '../../definitions/props.js'
import type { AracnaButtonGroupElementAttributes, AracnaButtonGroupElementEventMap } from '@aracna/web-components'
import { AracnaButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'

export const AracnaButtonGroup: ElementComponent<AracnaButtonGroupElement, AracnaButtonGroupProps> = createBaseElementComponent<
  AracnaButtonGroupElement,
  AracnaButtonGroupElementAttributes,
  AracnaButtonGroupElementEventMap
>('aracna-button-group', AracnaButtonGroupElement)
