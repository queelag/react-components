import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import type { AracnaButtonProps } from '../../definitions/props.js'
import type { AracnaButtonElementAttributes, AracnaButtonElementEventMap } from '@aracna/web-components'
import { AracnaButtonElement } from '@aracna/web-components/elements/input/button-element'

export const AracnaButton: ElementComponent<AracnaButtonElement, AracnaButtonProps> = createBaseElementComponent<
  AracnaButtonElement,
  AracnaButtonElementAttributes,
  AracnaButtonElementEventMap
>('aracna-button', AracnaButtonElement, ['button-click'])
