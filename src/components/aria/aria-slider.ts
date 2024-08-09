import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
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
>('aracna-aria-slider-thumb', AracnaAriaSliderThumbElement, ['slider-thumb-move'])
