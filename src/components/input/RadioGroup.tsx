import { createElementComponent, ElementComponent, RadioButtonProps, RadioGroupProps } from '@queelag/react'
import { RadioButtonElement, RadioGroupElement } from '@queelag/web-components'

export const QRadioButton: ElementComponent<RadioButtonElement, RadioButtonProps> = createElementComponent('q-=-radio-button', RadioButtonElement)
export const QRadioGroup: ElementComponent<RadioGroupElement, RadioGroupProps> = createElementComponent('q-=-radio-group', RadioGroupElement)
