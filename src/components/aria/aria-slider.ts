import { createBaseElementComponent, createFormControlElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaAriaSliderProps, AracnaAracnaAriaSliderThumbProps } from '../../definitions/props.js'
import type {
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
} from '@aracna/web-components'
import { AracnaAriaSliderElement, AracnaAriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'

export const AracnaAracnaAriaSlider: ElementComponent<AracnaAriaSliderElement, AracnaAracnaAriaSliderProps> = createFormControlElementComponent<
  AracnaAriaSliderElement,
  AracnaAriaSliderElementAttributes,
  AracnaAriaSliderElementEventMap
>('aracna-aria-slider', AracnaAriaSliderElement, ['slider-change'])

export const AracnaAracnaAriaSliderThumb: ElementComponent<AracnaAriaSliderThumbElement, AracnaAracnaAriaSliderThumbProps> = createBaseElementComponent<
  AracnaAriaSliderThumbElement,
  AracnaAriaSliderThumbElementAttributes,
  AracnaAriaSliderThumbElementEventMap
>('aracna-aria-slider-thumb', AracnaAriaSliderThumbElement, ['slider-thumb-move'])
