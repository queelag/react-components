import { createBaseElementComponent, createFormFieldElementComponent, ElementComponent, RadioButtonProps, RadioGroupProps } from '@queelag/react'
import { RadioButtonElement, RadioGroupElement } from '@queelag/web-components/elements/input/radio.group.element.js'

export const QRadioButton: ElementComponent<RadioButtonElement, RadioButtonProps> = createBaseElementComponent('q-radio-button', RadioButtonElement)
export const QRadioGroup: ElementComponent<RadioGroupElement, RadioGroupProps> = createFormFieldElementComponent('q-radio-group', RadioGroupElement)
