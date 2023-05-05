import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { RadioGroupProps, RadioButtonProps } from '@aracna/react'
import type { RadioGroupElementAttributes, RadioGroupElementEventMap, RadioButtonElementAttributes, RadioButtonElementEventMap } from '@aracna/web'
import { RadioGroupElement, RadioButtonElement } from '@aracna/web-components/input/radio-group'

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
