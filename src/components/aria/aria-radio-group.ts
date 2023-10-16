import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAriaRadioButtonProps, AracnaAriaRadioGroupProps } from '@aracna/react'
import type {
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
} from '@aracna/web'
import { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export const AracnaAriaRadioButton: ElementComponent<AriaRadioButtonElement, AracnaAriaRadioButtonProps> = createBaseElementComponent<
  AriaRadioButtonElement,
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap
>('aracna-aria-radio-button', AriaRadioButtonElement)

export const AracnaAriaRadioGroup: ElementComponent<AriaRadioGroupElement, AracnaAriaRadioGroupProps> = createFormFieldElementComponent<
  AriaRadioGroupElement,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
>('aracna-aria-radio-group', AriaRadioGroupElement)
