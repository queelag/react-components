import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaCheckBoxProps } from '../../definitions/props.js'
import type { AracnaCheckBoxElementAttributes, AracnaCheckBoxElementEventMap } from '@aracna/web-components'
import { AracnaCheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export const AracnaCheckBox: ElementComponent<AracnaCheckBoxElement, AracnaCheckBoxProps> = createFormControlElementComponent<
  AracnaCheckBoxElement,
  AracnaCheckBoxElementAttributes,
  AracnaCheckBoxElementEventMap
>('aracna-checkbox', AracnaCheckBoxElement)
