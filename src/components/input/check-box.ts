import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaCheckBoxProps } from '../../definitions/props.js'
import type { AracnaCheckBoxElementAttributes, AracnaCheckBoxElementEventMap } from '@aracna/web-components'
import { AracnaCheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export const AracnaAracnaCheckBox: ElementComponent<AracnaCheckBoxElement, AracnaAracnaCheckBoxProps> = createFormControlElementComponent<
  AracnaCheckBoxElement,
  AracnaCheckBoxElementAttributes,
  AracnaCheckBoxElementEventMap
>('aracna-checkbox', AracnaCheckBoxElement)
