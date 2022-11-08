import { AriaRadioButtonProps, AriaRadioGroupProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaRadioButtonElement, AriaRadioGroupElement } from '@queelag/web-components'

export const QAriaRadioButton: ElementComponent<AriaRadioButtonElement, AriaRadioButtonProps> = createElementComponent(
  'q-aria-radio-button',
  AriaRadioButtonElement
)

export const QAriaRadioGroup: ElementComponent<AriaRadioGroupElement, AriaRadioGroupProps> = createElementComponent('q-aria-radio-group', AriaRadioGroupElement)
