import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaRadioGroupProps, AracnaRadioButtonProps } from '../../definitions/props.js'
import type {
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap
} from '@aracna/web-components'
import { AracnaRadioGroupElement, AracnaRadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'

export const AracnaRadioGroup: ElementComponent<AracnaRadioGroupElement, AracnaRadioGroupProps> = createFormControlElementComponent<
  AracnaRadioGroupElement,
  AracnaRadioGroupElementAttributes,
  AracnaRadioGroupElementEventMap
>('aracna-radio-group', AracnaRadioGroupElement)

export const AracnaRadioButton: ElementComponent<AracnaRadioButtonElement, AracnaRadioButtonProps> = createBaseElementComponent<
  AracnaRadioButtonElement,
  AracnaRadioButtonElementAttributes,
  AracnaRadioButtonElementEventMap
>('aracna-radio-button', AracnaRadioButtonElement, ['check', 'uncheck'])
