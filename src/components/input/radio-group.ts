import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaRadioGroupProps, AracnaAracnaRadioButtonProps } from '../../definitions/props.js'
import type {
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap
} from '@aracna/web-components'
import { AracnaRadioGroupElement, AracnaRadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'

export const AracnaAracnaRadioGroup: ElementComponent<AracnaRadioGroupElement, AracnaAracnaRadioGroupProps> = createFormControlElementComponent<
  AracnaRadioGroupElement,
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap
>('aracna-radio-group', AracnaRadioGroupElement)

export const AracnaAracnaRadioButton: ElementComponent<AracnaRadioButtonElement, AracnaAracnaRadioButtonProps> = createBaseElementComponent<
  AracnaRadioButtonElement,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap
>('aracna-radio-button', AracnaRadioButtonElement)
