import { AriaRadioButtonProps, AriaRadioGroupProps, createBaseElementComponent, createFormFieldElementComponent, ElementComponent } from '@queelag/react'
import { AriaRadioButtonElement, AriaRadioGroupElement } from '@queelag/web-components/elements/aria/aria.radio.group.element.js'

export const QAriaRadioButton: ElementComponent<AriaRadioButtonElement, AriaRadioButtonProps> = createFormFieldElementComponent(
  'q-aria-radio-button',
  AriaRadioButtonElement
)

export const QAriaRadioGroup: ElementComponent<AriaRadioGroupElement, AriaRadioGroupProps> = createBaseElementComponent(
  'q-aria-radio-group',
  AriaRadioGroupElement
)
