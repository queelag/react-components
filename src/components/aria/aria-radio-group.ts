import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaAriaRadioButtonProps, AracnaAriaRadioGroupProps } from '../../definitions/props.js'
import type {
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
} from '@aracna/web-components'
import { AracnaAriaRadioButtonElement, AracnaAriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export const AracnaAriaRadioButton: ElementComponent<AracnaAriaRadioButtonElement, AracnaAriaRadioButtonProps> = createBaseElementComponent<
  AracnaAriaRadioButtonElement,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap
>('aracna-aria-radio-button', AracnaAriaRadioButtonElement, ['check', 'uncheck'])

export const AracnaAriaRadioGroup: ElementComponent<AracnaAriaRadioGroupElement, AracnaAriaRadioGroupProps> = createFormControlElementComponent<
  AracnaAriaRadioGroupElement,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
>('aracna-aria-radio-group', AracnaAriaRadioGroupElement)
