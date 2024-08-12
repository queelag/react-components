import type { ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '../../functions/create-base-element-component.js'
import { createFormControlElementComponent } from '../../functions/create-form-control-element-component.js'
import type { AracnaAriaSliderProps, AracnaAriaSliderThumbProps } from '../../definitions/props.js'
import type {
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
} from '@aracna/web-components'
import { AracnaAriaSliderElement, AracnaAriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'

export const AracnaAriaSlider: ElementComponent<AracnaAriaSliderElement, AracnaAriaSliderProps> = createFormControlElementComponent<
  AracnaAriaSliderElement,
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap
>('aracna-aria-slider', AracnaAriaSliderElement, ['slider-change'])

export const AracnaAriaSliderThumb: ElementComponent<AracnaAriaSliderThumbElement, AracnaAriaSliderThumbProps> = createBaseElementComponent<
  AracnaAriaSliderThumbElement,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
>('aracna-aria-slider-thumb', AracnaAriaSliderThumbElement, ['move'])
