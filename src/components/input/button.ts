import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaButtonProps } from '../../definitions/props.js'
import type { AracnaButtonElementAttributes, AracnaButtonElementEventMap } from '@aracna/web-components'
import { AracnaButtonElement } from '@aracna/web-components/elements/input/button-element'

export const AracnaButton: ElementComponent<AracnaButtonElement, AracnaButtonProps> = createBaseElementComponent<
  AracnaButtonElement,
  AracnaButtonElementAttributes,
  AracnaButtonElementEventMap
>('aracna-button', AracnaButtonElement, ['button-click'])
