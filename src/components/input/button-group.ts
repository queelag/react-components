import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaButtonGroupProps } from '../../definitions/props.js'
import type { AracnaButtonGroupElementAttributes, AracnaButtonGroupElementEventMap } from '@aracna/web-components'
import { AracnaButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'

export const AracnaButtonGroup: ElementComponent<AracnaButtonGroupElement, AracnaAracnaButtonGroupProps> = createBaseElementComponent<
  AracnaButtonGroupElement,
  AracnaButtonGroupElementAttributes,
  AracnaButtonGroupElementEventMap
>('aracna-button-group', AracnaButtonGroupElement)
