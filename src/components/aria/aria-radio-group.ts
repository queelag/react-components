import type { AriaRadioButtonProps, AriaRadioGroupProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type {
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
} from '@aracna/web'
import { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export const AracnaAriaRadioButton: ElementComponent<AriaRadioButtonElement, AriaRadioButtonProps> = createBaseElementComponent<
  AriaRadioButtonElement,
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap
>('aracna-aria-radio-button', AriaRadioButtonElement)

export const AracnaAriaRadioGroup: ElementComponent<AriaRadioGroupElement, AriaRadioGroupProps> = createFormFieldElementComponent<
  AriaRadioGroupElement,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
>('aracna-aria-radio-group', AriaRadioGroupElement)
