import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaRadioGroupProps, AracnaRadioButtonProps } from '@aracna/react'
import type { RadioGroupElementAttributes, RadioGroupElementEventMap, RadioButtonElementAttributes, RadioButtonElementEventMap } from '@aracna/web'
import { RadioGroupElement, RadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'

export const AracnaRadioGroup: ElementComponent<RadioGroupElement, AracnaRadioGroupProps> = createFormControlElementComponent<
  RadioGroupElement,
  RadioGroupElementAttributes,
  RadioGroupElementEventMap
>('aracna-radio-group', RadioGroupElement)

export const AracnaRadioButton: ElementComponent<RadioButtonElement, AracnaRadioButtonProps> = createBaseElementComponent<
  RadioButtonElement,
  RadioButtonElementAttributes,
  RadioButtonElementEventMap
>('aracna-radio-button', RadioButtonElement)
