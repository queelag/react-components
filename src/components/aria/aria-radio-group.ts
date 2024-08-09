import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaRadioButtonProps, AracnaAracnaAriaRadioGroupProps } from '../../definitions/props.js'
import type {
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
} from '@aracna/web-components'
import { AracnaAriaRadioButtonElement, AracnaAriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export const AracnaAracnaAriaRadioButton: ElementComponent<AracnaAriaRadioButtonElement, AracnaAracnaAriaRadioButtonProps> = createBaseElementComponent<
  AracnaAriaRadioButtonElement,
  AracnaAriaRadioButtonElementAttributes,
  AracnaAriaRadioButtonElementEventMap
>('aracna-aria-radio-button', AracnaAriaRadioButtonElement)

export const AracnaAracnaAriaRadioGroup: ElementComponent<AracnaAriaRadioGroupElement, AracnaAracnaAriaRadioGroupProps> = createFormControlElementComponent<
  AracnaAriaRadioGroupElement,
  AracnaAriaRadioGroupElementAttributes,
  AracnaAriaRadioGroupElementEventMap
>('aracna-aria-radio-group', AracnaAriaRadioGroupElement)
