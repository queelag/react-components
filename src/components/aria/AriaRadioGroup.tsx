import { AriaRadioButtonProps, AriaRadioGroupProps, createBaseElementComponent, createFormFieldElementComponent, ElementComponent } from '@aracna/react'
import { AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap } from '@aracna/web'
import { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria.radio.group.element.js'

export const AracnaAriaRadioButton: ElementComponent<AriaRadioButtonElement, AriaRadioButtonProps> = createFormFieldElementComponent<
  AriaRadioButtonElement,
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap
>('aracna-aria-radio-button', AriaRadioButtonElement)

export const AracnaAriaRadioGroup: ElementComponent<AriaRadioGroupElement, AriaRadioGroupProps> = createBaseElementComponent<
  AriaRadioGroupElement,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
>('aracna-aria-radio-group', AriaRadioGroupElement)
