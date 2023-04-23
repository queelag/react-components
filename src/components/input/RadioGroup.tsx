import { createBaseElementComponent, createFormFieldElementComponent, ElementComponent, RadioButtonProps, RadioGroupProps } from '@aracna/react'
import { RadioButtonElementAttributes, RadioButtonElementEventMap, RadioGroupElementAttributes, RadioGroupElementEventMap } from '@aracna/web'
import { RadioButtonElement, RadioGroupElement } from '@aracna/web-components/elements/input/radio.group.element.js'

export const AracnaRadioButton: ElementComponent<RadioButtonElement, RadioButtonProps> = createBaseElementComponent<
  RadioButtonElement,
  RadioButtonElementAttributes,
  RadioButtonElementEventMap
>('aracna-radio-button', RadioButtonElement)

export const AracnaRadioGroup: ElementComponent<RadioGroupElement, RadioGroupProps> = createFormFieldElementComponent<
  RadioGroupElement,
  RadioGroupElementAttributes,
  RadioGroupElementEventMap
>('aracna-radio-group', RadioGroupElement)
