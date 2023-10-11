import type { ElementComponent, RadioButtonProps, RadioGroupProps } from '@aracna/react'
import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { RadioButtonElementAttributes, RadioButtonElementEventMap, RadioGroupElementAttributes, RadioGroupElementEventMap } from '@aracna/web'
import { RadioButtonElement, RadioGroupElement } from '@aracna/web-components/elements/input/radio-group-element'

export const AracnaRadioGroup: ElementComponent<RadioGroupElement, RadioGroupProps> = createFormFieldElementComponent<
  RadioGroupElement,
  RadioGroupElementAttributes,
  RadioGroupElementEventMap
>('aracna-radio-group', RadioGroupElement)

export const AracnaRadioButton: ElementComponent<RadioButtonElement, RadioButtonProps> = createBaseElementComponent<
  RadioButtonElement,
  RadioButtonElementAttributes,
  RadioButtonElementEventMap
>('aracna-radio-button', RadioButtonElement)
